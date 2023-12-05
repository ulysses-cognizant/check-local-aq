const axios = require('axios');
const { getAirQuality } = require('../data/air-quality.js');
const monitoringSites = require('../data/monitoring-sites.js');
const airQualityData = require('../data/air-quality.js');
const apiKey = '21QLuXkjHjzpy4AyvOnQSKqLkRdiG5KV'; 
// const apiKey = process.env.OS_API_KEY;


exports.getLocationData = async (req, res) => {
  try {
    const originalUserLocation = req.body.location.trim();
    let userLocation = originalUserLocation.toUpperCase(); // Use 'let' to allow reassignment

    // Regex patterns to check for full and partial postcodes
    const fullPostcodePattern = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2})$/;
    const partialPostcodePattern = /^([A-Z]{1,2}\d[A-Z\d]?)$/;

    // Insert a space for full postcodes without a space
    if (fullPostcodePattern.test(userLocation) && !userLocation.includes(' ')) {
      const spaceIndex = userLocation.length - 3;
      userLocation = `${userLocation.slice(0, spaceIndex)} ${userLocation.slice(spaceIndex)}`;
    }

    const aqValue = req.body.aq;
    const airQuality = getAirQuality(aqValue);

    if (!userLocation) {
      return res.status(400).redirect('enter-location');
    }

    let filters = [
      'LOCAL_TYPE:City',
      'LOCAL_TYPE:Town',
      'LOCAL_TYPE:Village',
      'LOCAL_TYPE:Suburban_Area',
      'LOCAL_TYPE:Postcode',
      'LOCAL_TYPE:Airport'
    ].join('+');

    const apiUrl = `https://api.os.uk/search/names/v1/find?query=${encodeURIComponent(userLocation)}&fq=${encodeURIComponent(filters)}&key=${apiKey}`;

    const response = await axios.get(apiUrl);

    let matches = response.data.results.filter(item => {
      const name = item.GAZETTEER_ENTRY.NAME1.toUpperCase();
      return name.includes(userLocation) || userLocation.includes(name);
    });

    // If it's a partial postcode and there are matches, use the first match and adjust the title
    if (partialPostcodePattern.test(originalUserLocation) && matches.length > 0) {
      matches[0].GAZETTEER_ENTRY.NAME1 = originalUserLocation.toUpperCase(); // Set the name to the partial postcode
      matches = [matches[0]];
    }

    req.session.locationData = matches; // Store the data in session

    if (matches.length === 1) {
      console.log("Monitoring Sites Data:", JSON.stringify(monitoringSites, null, 2));
      res.render('location', { result: matches[0], airQuality: airQuality, airQualityData: airQualityData.commonMessages, monitoringSites: monitoringSites });
    } else if (matches.length > 1) {
      res.render('multiple_locations', { results: matches, userLocation: originalUserLocation, airQuality: airQuality, airQualityData: airQualityData.commonMessages, monitoringSites: monitoringSites });
    } else {
      res.render('location-not-found', { userLocation: originalUserLocation });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).redirect('location-details-notfound'); 
  }
};




exports.getLocationDetails = (req, res) => {
  try {
    const locationId = req.params.id;
    const locationData = req.session.locationData || [];
    const locationDetails = locationData.find(item => item.GAZETTEER_ENTRY.ID === locationId);

    if (locationDetails) {
      const airQuality = getAirQuality(/* Retrieved from session or another source */);
      res.render('location', { result: locationDetails, airQuality: airQuality, airQualityData: airQualityData.commonMessages, monitoringSites: monitoringSites });
    } else {
      res.render('location-details-notfound');
    }
  } catch (error) {
    console.error('Error retrieving location details:', error);
    res.status(500).redirect('location-details-notfound'); 
  }
};
