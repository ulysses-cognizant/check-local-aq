// //
// // For guidance on how to create routes see:
// // https://prototype-kit.service.gov.uk/docs/create-routes
// //

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter();
const locationController = require('./controllers/location');
const measurementStations = require('./data/measurement-stations.js');
const airQuality = require('./data/air-quality.js');

// // Air quality
router.get('/where', (req, res) => {
  res.render('where', {
    airQuality: airQuality, // Keep passing the entire airQuality module
  });
});


// Route for an individual measurement station
router.get('/stations/:slug', (req, res) => {
    const stationSlug = req.params.slug;
    const station = measurementStations.find(s => s.slug === stationSlug);
  
    if (!station) {
      return res.status(404).send('Station not found');
    }
  
    res.render('station', {
      station: station,
      title: station.station_name
    });
  });



// POST route for where.html submission
router.post('/location', locationController.getLocationData);

// New GET route to handle individual location details
router.get('/location/:id', locationController.getLocationDetails);

// Export the router
module.exports = router;

