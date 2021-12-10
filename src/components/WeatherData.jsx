import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Forecast from "./Forecast";
import axios from "axios";
import moment from "moment";
import { getCurrentIconURL } from "../utils/icons";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const WeatherData = ({ weatherData }) => {
  function getDateTime() {
    return moment.unix(weatherData.dateTime).format("LT");
  }

  function getDay() {
    return moment.unix(weatherData.dateTime).format("dddd");
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
            {weatherData.city}
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
              // alignItems: "center",
              backgroundColor: "#AFe58d",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flex: 2,
                backgroundColor: "#DFe58d",
              }}
            >
              <Box sx={{ gridColumn: "2/4", fontSize: "22px" }}>{getDay()}</Box>
              <Box
                sx={{
                  gridColumn: "5/9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  // width: "320px",
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
                  {weatherData.temp}
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
              <Box
                sx={{
                  gridColumn: "10/12",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  fontSize: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArrowUpward />
                  <Box sx={{ ml: 1 }}>{weatherData.high} &deg;c</Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ArrowDownward />
                  <Box sx={{ ml: 1 }}>{weatherData.low} &deg;c</Box>
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
                {weatherData.weather}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flex: 1, justifyContent: "space-around" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box sx={{ typography: "h6" }}>Wind Speed</Box>
              <Box sx={{ typography: "h6", fontSize: "16px" }}>
                {weatherData.windSpeed} m/s
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box sx={{ typography: "h6" }}>Pressure</Box>
              <Box>{weatherData.pressure} mbar</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box sx={{ typography: "h6" }}>Humidity</Box>
              <Box>{weatherData.humidity} %</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WeatherData;
