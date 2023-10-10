const process = require('node:process');
const { WEATHER_API_KEY } = process.env;
const weatherEndpoint = 'https://api.weatherapi.com/v1';

/**
 * Get weather forecast
 *
 * @param {string} q - Location query
 * @returns {object} Weather forecast
 * @see {@link https://www.weatherapi.com/docs/#apis-forecast}
 */
exports.getWeather = async (q, days = 5) => {
  const weatherUrl = new URL(`${weatherEndpoint}/forecast.json`);
  weatherUrl.searchParams.append('key', WEATHER_API_KEY);
  weatherUrl.searchParams.append('q', q || 'Porthcawl');

  const weatherResponse = await fetch(weatherUrl);

  if (!weatherResponse.ok) {
    console.error(weatherResponse.statusText);
    // Send an HTTP response with a redirect status code
    return { error: 'Location not found', redirect: '/location-not-found.html' };
  }

  const weatherData = await weatherResponse.json();

  return weatherData;
};
