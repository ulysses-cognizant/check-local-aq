
// Content for monitoring sites

const monitoringSites = [
  {
      "site_name": "Leamington Spa",
      "distance": 1.35,
      "site_type": "urban-site",
      "pollutants": [
          {
              "type": "ozone",
              "measurement": 34.526,
              "trend": "Rising",
              "band": "Low",
              "aqi": 2,
              "low_range": "0 to 100"
          },
          {
              "type": "nitrogen-dioxide",
              "measurement": 27.349,
              "trend": "Steady",
              "band": "Low",
              "aqi": 1,
              "low_range": "0 to 200"
          },
          {
            "type": "particulate-matter10",
            "measurement": 11.800,
            "trend": "Falling",
            "band": "Low",
            "aqi": 1,
            "low_range": "0 to 50"
        },
        {
          "type": "particulate-matter2",
          "measurement": 8.113,
          "trend": "Falling",
          "band": "Low",
          "aqi": 1,
          "low_range": "0 to 35"
      }
      ]
  },
  {
      "site_name": "Leamington Spa Rugby Road",
      "distance": 2.28,
      "site_type": "traffic-site",
      "pollutants": [
          {
              "type": "nitrogen-dioxide",
              "measurement": 21.611,
              "trend": "Steady",
              "band": "Low",
              "aqi": 1,
              "low_range": "0 to 200"
          },
          {
            "type": "particulate-matter10",
            "measurement": 	9.500,
            "trend": "Rising",
            "band": "Low",
            "aqi": 1,
            "low_range": "0 to 50"
        },
        {
          "type": "particulate-matter2",
          "measurement": 6.226,
          "trend": "Rising",
          "band": "Low",
          "aqi": 1,
          "low_range": "0 to 35"
      }
      ]
  },
  {
      "site_name": "Coventry Binley Road",
      "distance": 14.61,
      "site_type": "traffic-site",
      "pollutants": [
          {
              "type": "nitrogen-dioxide",
              "measurement": 24.289,
              "trend": "Steady",
              "band": "Low",
              "aqi": 1,
              "low_range": "0 to 200"
          },
          {
            "type": "particulate-matter10",
            "measurement": 	13.527,
            "trend": "Falling",
            "band": "Low",
            "aqi": 1,
            "low_range": "0 to 50"
        }
      ]
  }
]

// Pollutant reference data

const pollutantTypes = {
    "nitrogen-dioxide": {
        "title": "Nitrogen dioxide",
        "href": "/nitrogen-dioxide",
        "low_range": "0 to 200"
    },
    "particulate-matter10": {
        "title": "PM10",
        "href": "/particulate-matter10",
        "low_range": "0 to 50"
    },
    "particulate-matter2": {
        "title": "PM2.5",
        "href": "/particulate-matter2",
        "low_range": "0 to 35"
    },
    "ozone": {
        "title": "Ozone",
        "href": "/ozone",
        "low_range": "0 to 100"
    },
    "sulphur-dioxide": {
        "title": "Sulphur dioxide",
        "href": "/sulphur-dioxide",
        "low_range": "0 to 100"
      }

  };

// Used to populate toggletips on monitoring sites

const siteTypeDescriptions = {
    "urban-site": "This monitoring site is based in an urban area. An urban area is a city or a town and can include parks, residential houses and commercial buildings.",
    "suburban-site": "This monitoring site is based near vehicle traffic. It is located close to a road, motorway or highway. This means we know that recorded pollutants come from this source.",
    "traffic-site": "This monitoring site is based near vehicle traffic. It is located close to a road, motorway or highway. This means we know that recorded pollutants come from this source.",
    "rural-site": "This monitoring site is based near vehicle traffic. It is located close to a road, motorway or highway. This means we know that recorded pollutants come from this source.",
    "industrial-site": "This monitoring site is based near vehicle traffic. It is located close to a road, motorway or highway. This means we know that recorded pollutants come from this source.",
    "background-site": "This monitoring site is based near vehicle traffic. It is located close to a road, motorway or highway. This means we know that recorded pollutants come from this source."
  }

  module.exports = { monitoringSites, siteTypeDescriptions, pollutantTypes };




