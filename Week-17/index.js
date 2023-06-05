const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./config/.env" });

const weatherRouter = require("./routers/weatherRouter");
const forecastWeatherRouter = require("./routers/forecastWeatherRouter");
const currentWeatherRouter = require("./routers/currentWeatherRouter");

// Routes
app.use("/api/weather", weatherRouter);
app.use("/api/forecast", forecastWeatherRouter);
app.use("/api/current", currentWeatherRouter);

// Handling routes apart from the defined ones
app.all("*", (req, res, next) => {
  next(`Can't find ${req.originalUrl} on the server`, 404);
});

// Initiating the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
