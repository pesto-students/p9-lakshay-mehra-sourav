const express = require("express");
const router = express.Router();
const forecastWeatherController = require("../controllers/forecastWeatherController");

router.get("/", forecastWeatherController);

module.exports = router;
