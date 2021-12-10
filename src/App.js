import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import axios from "axios";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import WeatherData from "./components/WeatherData";
import ForecastData from "./components/Forecast";
import ResponsiveLayout from "./Layouts/ResponsiveLayout";

const initialWeatherState = {
  city: "",
  dateTime: "",
  temp: "",
  high: "",
  low: "",
  humidity: "",
  pressure: "",
  windSpeed: "",
  icon: "",
  weather: "",
};

const initialForecastData = {
  daily: [
    {
      dateTime: "",
      high: "",
      low: "",
      icon: "",
      weather: "",
    },
  ],
};

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(initialWeatherState);
  const [forecastData, setForecastData] = useState(initialForecastData);
  const [forecastCurrent, setForecastCurrent] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    const fetchData = async () => {
      console.log(`lat: ${lat} lon:${long}`);
      //----------------Current Weather ---------------
      let url = `${process.env.REACT_APP_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      console.log(url);
      const { data } = await axios.get(url);
      console.log(data);
      console.log(data.main.temp);
      //----------------------------------------------
      let url_forecast = `${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${long}&units=metric&cnt=5&exclude=hourly,minutely&appid=${process.env.REACT_APP_API_KEY}`;
      console.log(url_forecast);
      const forecastResp = await axios.get(url_forecast);
      console.log(forecastResp.data);
      let forecast = forecastResp.data;
      let currentWeather = forecast.current;
      let daily = forecast.daily;
      setForecastCurrent({
        city: data.name,
        current: currentWeather,
        daily: daily[0],
      });
      // let weatherInfo = forecast.daily[0].weather[0];
      let forecastDataList = [];
      for (let day of daily.slice(1, 6)) {
        let data = {
          dateTime: day.dt,
          high: day.temp.max,
          low: day.temp.min,
          windSpeed: day.wind_speed,
          pressure: day.pressure,
          humidity: day.humidity,
          icon: day.weather[0].icon,
          weather: day.weather[0].main,
          temp: day.temp.day,
        };
        forecastDataList.push(data);
      }
      setForecastData(forecastDataList);

      setWeatherData({
        city: data.name,
        dateTime: currentWeather.dt,
        temp: currentWeather.temp,
        high: daily[0].temp.max,
        low: daily[0].temp.min,
        windSpeed: currentWeather.wind_speed,
        pressure: currentWeather.pressure,
        humidity: currentWeather.humidity,
        icon: currentWeather.weather[0].icon,
        weather: currentWeather.weather[0].main,
      });

      setLoading(false);
    };

    if (lat !== 0 && long !== 0) {
      fetchData();
    }
  }, [lat, long]);

  function handleForecastClick(selectedData) {
    console.log(`onForecast Click : ${selectedData}`);
    setWeatherData({
      ...weatherData,
      dateTime: selectedData.dateTime,
      temp: selectedData.temp,
      high: selectedData.high,
      low: selectedData.low,
      windSpeed: selectedData.windSpeed,
      pressure: selectedData.pressure,
      humidity: selectedData.humidity,
      icon: selectedData.icon,
      weather: selectedData.weather,
    });
  }

  function handleCurrentWeather() {
    setWeatherData({
      city: forecastCurrent.city,
      dateTime: forecastCurrent.current.dt,
      temp: forecastCurrent.current.temp,
      high: forecastCurrent.daily.temp.max,
      low: forecastCurrent.daily.temp.min,
      windSpeed: forecastCurrent.current.wind_speed,
      pressure: forecastCurrent.current.pressure,
      humidity: forecastCurrent.current.humidity,
      icon: forecastCurrent.current.weather[0].icon,
      weather: forecastCurrent.current.weather[0].main,
    });
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Box sx={{ height: "100vh" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "repeat(12,1fr)",
              height: "100%",
              bgcolor: "#e5dede",
            }}
          >
            <Box sx={{ gridRow: "span 1" }}>
              <Header />
            </Box>
            <Box sx={{ gridRow: "span 10", backgroundColor: "green" }}>
              {/* Body */}
              <Box
                sx={{
                  backgroundColor: "blue",
                  width: "80%",
                  height: "100%",
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  // my: 2,
                }}
              >
                <Box sx={{ flex: 10, backgroundColor: "red" }}>
                  <WeatherData weatherData={weatherData} />
                </Box>
                <Box sx={{ flex: 3, backgroundColor: "yellow" }}>
                  <ForecastData
                    forecastData={forecastData}
                    updateWeatherInfo={handleForecastClick}
                    updateTodayInfo={handleCurrentWeather}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gridRow: "span 1",
                mb: 1,
              }}
            >
              <Footer />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
