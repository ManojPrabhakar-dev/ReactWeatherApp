import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Forecast from "./Forecast";
import axios from "axios";
import moment from "moment";
import { getCurrentIconURL } from "../utils/icons";

const WeatherData = () => {
  // const navigate = useNavigate();
  // function handleClick(e) {
  //   navigate("/");
  // }

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

  function getDateTime() {
    return moment.unix(weatherData.dt).format("LT");
  }

  // function getIconURL(weatherData) {
  //   return `https://openweathermap.org/img/wn/${forecastData.current.weather[0].icon}@2x.png`;
  // }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h1>Todat {getDateTime()}</h1>
          <h1>{weatherData.main.temp} &deg;C</h1>
          <Box>
            <img
              style={{ width: 70, height: 70 }}
              src={getCurrentIconURL(forecastData)}
              alt="Weather Icon"
            />
            <p>{forecastData.current.weather[0].main}</p>
          </Box>
          <h1>city : {weatherData.name}</h1>
          <Forecast forecastData={forecastData} />
        </Box>
      )}
    </>
  );
};

export default WeatherData;
