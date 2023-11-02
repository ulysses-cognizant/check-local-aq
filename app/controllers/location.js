const localAuthorities = require('../data/local-authorities.js');
const zones = require('../data/zones.js');
const { getPoint } = require('../services/boundaries.js');
const { getWeather } = require('../services/weather.js');
const getAirQuality = require('../data/air-quality.js');  
const measurementStations = require('../data/measurement-stations.js');


// Define bounding box for the UK
const ukBoundingBox = {
  north: 60.8, // Northernmost latitude
  south: 49.9, // Southernmost latitude
  west: -8.6, // Westernmost longitude
  east: 1.8   // Easternmost longitude
};

exports.get = async (req, res) => {
  const { q, aq } = req.query;  // Destructure aq from the query parameters
  let { forecast, location, error, redirect } = await getWeather(q);

  if (error) {
    // Handle the error or redirect based on the 'redirect' property
    if (redirect) {
      res.redirect(redirect);
    } else {
      // Handle other errors
      res.status(500).send(error);
    }
  } else {
    // Check if the location is within the UK bounding box
    if (
      location.lat >= ukBoundingBox.south &&
      location.lat <= ukBoundingBox.north &&
      location.lon >= ukBoundingBox.west &&
      location.lon <= ukBoundingBox.east
    ) {
      // Get local authority data
      const mapitData = await getPoint(location.lat, location.lon);

      // Get all local authorities within the given area
      const mapitAreas = Object.values(mapitData)
        .filter(area => ['CTY', 'LBO', 'LGD', 'MTD', 'UTA'].includes(area.type));
      const mapitArea = Object.values(mapitAreas)[0];

      // Get GSS code for the first valid local authority
      const gss = mapitArea?.codes?.gss || 'E06000043';

      // Local authority information for the given GSS code
      const la = localAuthorities.find(item => item.gss === gss);

      // Region information for the given GSS region code
      const regionId = la?.gss_region_id || 'E12000008';
      const region = zones.find(item => item.gss === regionId);

      // Get the airQuality data dynamically or default value
      const airQuality = getAirQuality(aq);

      // Extend res.locals with the airQuality data
      res.locals = {
        ...res.locals,
        la, location, q, region, airQuality, measurementStations
      };

      res.render('location');
    } else {
      // If the location is not within the UK, redirect the user to location-not-found.html
      res.redirect('/location-not-found.html');
    }
  }
};
