const monitoringSites = [
  {
      "site_name": "Leamington Spa",
      "distance": 1.35,
      "site_type": "Information about this type of monitoring site in Birmingham",
      "pollutants": [
          {
              "type": "Ozone",
              "href": "/ozone",
              "measurement": 34.526,
              "trend": "Steady",
              "band": "Low",
              "aqi": 3,
              "low_range": 0
          },
          {
              "type": "Nitrogen dioxide",
              "href": "/nitrogen-dioxide",
              "measurement": 27.349,
              "trend": "Steady",
              "band": "High",
              "aqi": 7,
              "low_range": 0
          },
          {
            "type": "PM10",
            "href": "/particulate-matter10",
            "measurement": 11.800,
            "trend": "Steady",
            "band": "High",
            "aqi": 7,
            "low_range": 0
        },
        {
          "type": "PM2.5",
          "href": "/particulate-matter2",
          "measurement": 8.113,
          "trend": "Steady",
          "band": "High",
          "aqi": 7,
          "low_range": 0
      }
      ]
  },
  {
      "site_name": "Leamington Spa Rugby Road",
      "distance": 2.28,
      "site_type": "Information about this type of monitoring site in Cardiff",
      "pollutants": [
          {
              "type": "Nitrogen dioxide",
              "href": "/nitrogen-dioxide",
              "measurement": 21.611,
              "trend": "Steady",
              "band": "Low",
              "aqi": 3,
              "low_range": 0
          },
          {
            "type": "PM10",
            "href": "/particulate-matter10",
            "measurement": 	9.500,
            "trend": "Steady",
            "band": "High",
            "aqi": 7,
            "low_range": 0
        },
        {
          "type": "PM2.5",
          "href": "/particulate-matter2",
          "measurement": 6.226,
          "trend": "Steady",
          "band": "High",
          "aqi": 7,
          "low_range": 0
      }
      ]
  },
  {
      "site_name": "Coventry Binley Road",
      "distance": 14.61,
      "site_type": "Information about this type of monitoring site in Newport",
      "pollutants": [
          {
              "type": "Nitrogen dioxide",
              "href": "/nitrogen-dioxide",
              "measurement": 24.289,
              "trend": "Steady",
              "band": "Low",
              "aqi": 3,
              "low_range": 0
          },
          {
            "type": "PM10",
            "href": "/particulate-matter10",
            "measurement": 	13.527,
            "trend": "Steady",
            "band": "High",
            "aqi": 7,
            "low_range": 0
        }
      ]
  }
]

module.exports = monitoringSites;
