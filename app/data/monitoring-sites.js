const monitoringSites = [
  {
      "site_name": "Leamington Spa",
      "distance": 1.35,
      "site_type": "This monitoring site is based in an urban area.",
      "pollutants": [
          {
              "type": "Ozone",
              "href": "/ozone",
              "measurement": 34.526,
              "trend": "Rising",
              "band": "Low",
              "aqi": 2,
              "low_range": "0 to 100"
          },
          {
              "type": "Nitrogen dioxide",
              "href": "/nitrogen-dioxide",
              "measurement": 27.349,
              "trend": "Steady",
              "band": "Low",
              "aqi": 1,
              "low_range": "0 to 200"
          },
          {
            "type": "PM10",
            "href": "/particulate-matter10",
            "measurement": 11.800,
            "trend": "Falling",
            "band": "Low",
            "aqi": 1,
            "low_range": "0 to 50"
        },
        {
          "type": "PM2.5",
          "href": "/particulate-matter2",
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
      "site_type": "This monitoring site is based near vehicle traffic.",
      "pollutants": [
          {
              "type": "Nitrogen dioxide",
              "href": "/nitrogen-dioxide",
              "measurement": 21.611,
              "trend": "Steady",
              "band": "Low",
              "aqi": 1,
              "low_range": "0 to 200"
          },
          {
            "type": "PM10",
            "href": "/particulate-matter10",
            "measurement": 	9.500,
            "trend": "Rising",
            "band": "Low",
            "aqi": 1,
            "low_range": "0 to 50"
        },
        {
          "type": "PM2.5",
          "href": "/particulate-matter2",
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
      "site_type": "This monitoring site is based near vehicle traffic.",
      "pollutants": [
          {
              "type": "Nitrogen dioxide",
              "href": "/nitrogen-dioxide",
              "measurement": 24.289,
              "trend": "Steady",
              "band": "Low",
              "aqi": 1,
              "low_range": "0 to 200"
          },
          {
            "type": "PM10",
            "href": "/particulate-matter10",
            "measurement": 	13.527,
            "trend": "Falling",
            "band": "Low",
            "aqi": 1,
            "low_range": "0 to 50"
        }
      ]
  }
]

module.exports = monitoringSites;
