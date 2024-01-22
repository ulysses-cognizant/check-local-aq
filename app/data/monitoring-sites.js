
// Content for monitoring sites

const monitoringSites = [
    {
        "site_name": "Horley",
        "distance": 4.1,
        "site_type": "industrial-site",
        "pollutants": [
          {
                "type": "nitrogen-dioxide",
                "measurement": 280.289,
                "trend": "Rising",
                "band": "Moderate",
                "aqi": 4,
                "low_range": "0 to 200"
          }
        ]
    },
  {
    "site_name": "Storrington Roadside",
    "distance": 17,
    "site_type": "traffic-site",
    "pollutants": [
        {
            "type": "nitrogen-dioxide",
            "measurement": 209.436,
            "trend": "Rising",
            "band": "Moderate",
            "aqi": 4,
            "low_range": "0 to 200"
        }
    ]
},
{
    "site_name": "Brighton Preston Park",
    "distance": 18.8,
    "site_type": "urban-site",
    "pollutants": [
      {
            "type": "nitrogen-dioxide",
            "measurement": 102.467,
            "trend": "Rising",
            "band": "Low",
            "aqi": 3,
            "low_range": "0 to 200"
      },
      {
          "type": "particulate-matter2",
          "measurement": 41.8,
          "trend": "Falling",
          "band": "Moderate",
          "aqi": 4,
          "low_range": "0 to 35"
      }
    ]
}
]

// Pollutant reference data

const pollutantTypes = {
    "nitrogen-dioxide": {
        "title": "Nitrogen dioxide",
        "href": "/pollutants/nitrogen-dioxide",
        "low_range": "0 to 200"
    },
    "particulate-matter10": {
        "title": "PM10",
        "href": "/pollutants/particulate-matter10",
        "low_range": "0 to 50"
    },
    "particulate-matter2": {
        "title": "PM2.5",
        "href": "/pollutants/particulate-matter2",
        "low_range": "0 to 35"
    },
    "ozone": {
        "title": "Ozone",
        "href": "/pollutants/ozone",
        "low_range": "0 to 100"
    },
    "sulphur-dioxide": {
        "title": "Sulphur dioxide",
        "href": "/pollutants/sulphur-dioxide",
        "low_range": "0 to 100"
    }
  };

// Used to populate toggletips on monitoring sites

const siteTypeDescriptions = {
    "urban-site": "This monitoring site is based in an urban area. An urban area is a city or a town, where there are many 2-storey buildings. For the measurement of ozone, an urban area includes parks, residential houses and commercial buildings.",
    "suburban-site": "This monitoring site is based in a suburban location. Suburban areas are located either on their own or on the outskirts of a city or urban area. They are areas of different-sized buildings that may be close to farms, ales and woods.",
    "traffic-site": "This monitoring site is based near vehicle traffic. It is located close to a road, motorway or highway. This means we know that recorded pollutants come from this source.",
    "rural-site": "This monitoring site is in rural location. A rural site can be in a small settlement or area with natural ecosystems, forests or crops. The sites are more than 10 miles from cities and towns and more than 3 miles away from industrial sites, motorways and major roads.",
    "industrial-site": "This monitoring site is based in an industrial location. The pollutants are measured downwind of the industrial source and the nearest residential area.",
    "background-site": "This monitoring site is based in a background location. It is located to make sure pollutant measurements do not come from one specific source. The site is upwind from pollution sources in cities, industrial sources and rural areas."
  }

  module.exports = { monitoringSites, siteTypeDescriptions, pollutantTypes };




