import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Forecast from "./Forecast";
import axios from "axios";
import moment from "moment";
import { getCurrentIconURL } from "../utils/icons";

const WeatherData = ({ weatherData }) => {
  // const navigate = useNavigate();
  // function handleClick(e) {
  //   navigate("/");
  // }

  // const [lat, setLat] = useState(0);
  // const [long, setLong] = useState(0);
  // const [loading, setLoading] = useState(true);
  // const [weatherData, setWeatherData] = useState({});
  // const [forecastData, setForecastData] = useState({});

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });

  //   const fetchData = async () => {
  //     console.log(`lat: ${lat} lon:${long}`);
  //     //----------------Current Weather ---------------
  //     let url = `${process.env.REACT_APP_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  //     console.log(url);
  //     const { data } = await axios.get(url);
  //     console.log(data);
  //     setWeatherData(data);
  //     console.log(data.main.temp);
  //     //----------------------------------------------
  //     let url_forecast = `${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${long}&units=metric&cnt=5&exclude=hourly,minutely&appid=${process.env.REACT_APP_API_KEY}`;
  //     console.log(url_forecast);
  //     const forecastResp = await axios.get(url_forecast);
  //     console.log(forecastResp.data);
  //     setForecastData(forecastResp.data);
  //     setLoading(false);

  //     // return data;
  //   };

  //   if (lat !== 0 && long !== 0) {
  //     fetchData();
  //     // .then((data) => {
  //     //   setWeatherData(data);
  //     //   setLoading(false);
  //     //   console.log(data.main.temp);
  //     // });
  //   }
  // }, [lat, long]);

  function getDateTime() {
    return moment.unix(weatherData.dt).format("LT");
  }

  return (
    <>
      <Box
        sx={{
          // backgroundColor: "yellow",
          // display: "grid",
          // gridTemplateRows: "1fr 300px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            // flex: 1,
            justifyContent: "space-between",
            mx: 2,
          }}
        >
          <Box sx={{ typography: "body1", fontSize: 20 }}>
            {weatherData.name}
          </Box>
          <Box sx={{ typography: "body1", fontSize: 20 }}>{getDateTime()}</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // display: "relative",
            flex: 2,
            backgroundColor: "#4ee58d",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#AFe58d",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 2,
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "350px",
                  height: "180px",
                  backgroundColor: "#CA2A0d",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "7rem",
                    textAlign: "center",
                  }}
                >
                  {weatherData.main.temp}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    fontSize: "2rem",
                    top: "0.5rem",
                    right: 0,
                  }}
                >
                  &deg;C
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                AlignItems: "center",
              }}
            >
              <img
                style={{
                  width: 70,
                  height: 70,
                }}
                src={getCurrentIconURL(weatherData)}
                alt="Weather Icon"
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  typography: "h5",
                  fontSize: "2rem",
                  mx: 1,
                }}
              >
                {weatherData.weather[0].main}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flex: 1, justifyContent: "space-around" }}
          >
            <Box>Wind Speed</Box>
            <Box>Pressure</Box>
            <Box>Humidity</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WeatherData;
