//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const locationController = require('./controllers/location.js')
const localAuthorityController = require('./controllers/local-authority.js')
const airQuality = require('./data/air-quality.js');
const measurementStations = require('./data/measurement-stations.js');
const setBackLink = require('./controllers/back-link.js');


// Add your routes here


// Location
router.get('/location', locationController.get)

// Local authority
router.get('/local-authorities/', localAuthorityController.list)
router.get('/local-authorities/:id', localAuthorityController.get)

//Air quality
router.get('/where', (req, res) => {
    res.render('where', {
      airQuality: airQuality
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


//   // Back link 
//   router.get('/nitrogen-dioxide', setBackLink, function(req, res) {
//     res.render('nitrogen-dioxide', {
//       backLink: req.session.backUrl
//     });
//   });
