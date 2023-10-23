//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const locationController = require('./controllers/location.js')
const localAuthorityController = require('./controllers/local-authority.js')
const airQuality = require('./data/air-quality.js');

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