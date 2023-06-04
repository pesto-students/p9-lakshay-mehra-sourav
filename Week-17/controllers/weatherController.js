const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env["OPEN_WEATHER_API_KEY"];
const axios = require("axios");

const weatherController = async (req, res) => {
  const { city: cityList = [] } = req.query;
  let citiesWeatherData = [];

  // If only 1 city is provided (in /api/current endpoint)
  if (req.baseUrl === "/api/current") {
    let city = Array.isArray(cityList) ? cityList?.[0] : cityList;
    let url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(url);
    citiesWeatherData = data;
  }
  // If multiple cities are provided (in /api/weather endpoint)
  else {
    for await (let city of cityList) {
      let url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}`;
      const { data } = await axios.get(url);
      citiesWeatherData.push(data);
    }
  }
  res.send(citiesWeatherData);
};

module.exports = weatherController;
