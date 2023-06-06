const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = process.env["OPEN_WEATHER_API_KEY"];
const axios = require("axios");

const forecastWeatherController = async (req, res) => {
  const { city: cityList = [], days = 1 } = req.query;

  // If only 1 city is provided (in /api/current endpoint)
  let city = Array.isArray(cityList) ? cityList?.[0] : cityList;
  let timestampCount = 8 * days;
  let url = `${API_BASE_URL}?q=${city}&cnt=${timestampCount}&appid=${API_KEY}&units=metric`;
  const { data: citiesWeatherData } = await axios.get(url);
  res.send(citiesWeatherData);
};

module.exports = forecastWeatherController;
