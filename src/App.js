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

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});

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
      setWeatherData(data);
      console.log(data.main.temp);
      //----------------------------------------------
      let url_forecast = `${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${long}&units=metric&cnt=5&exclude=hourly,minutely&appid=${process.env.REACT_APP_API_KEY}`;
      console.log(url_forecast);
      const forecastResp = await axios.get(url_forecast);
      console.log(forecastResp.data);
      setForecastData(forecastResp.data);
      setLoading(false);

      // return data;
    };

    if (lat !== 0 && long !== 0) {
      fetchData();
      // .then((data) => {
      //   setWeatherData(data);
      //   setLoading(false);
      //   console.log(data.main.temp);
      // });
    }
  }, [lat, long]);

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
              Header
              {/* <Header /> */}
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
                {/* <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                > */}
                <Box sx={{ flex: 10, backgroundColor: "red" }}>
                  {/* Weather */}
                  <WeatherData weatherData={weatherData} />
                </Box>
                <Box sx={{ flex: 3, backgroundColor: "yellow" }}>
                  {/* Forecast */}
                  <ForecastData forecastData={forecastData} />
                </Box>
              </Box>
              {/* </Box> */}
            </Box>
            <Box gridRow="span 1">
              Footer
              {/* <Footer /> */}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;

{
  /* <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(12,1fr)",
            height: "100vh",
            bgcolor: "#e5dede",
            // height: 1,
          }}
        >
          <Box gridRow="span 2">
            <Header />
          </Box>
          <Box gridRow="span 8" sx={{ backgroundColor: "green" }}>
            <Box
              sx={{ backgroundColor: "blue", width: "80%", mx: "auto", my: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >                
                <Box>
                  <WeatherData weatherData={weatherData} />
                </Box>               

                <ForecastData forecastData={forecastData} />
              </Box>
            </Box>
          </Box>
          <Box gridRow="span 2">
            <Footer />
          </Box>
        </Box> */
}
