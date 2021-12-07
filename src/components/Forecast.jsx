import React from "react";
import Moment from "react-moment";
import moment from "moment";
import { Button, Box } from "@mui/material";
import { getForecastIconURL } from "../utils/icons";

const Forecast = ({ forecastData }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
      {forecastData.daily.slice(1, 6).map((data, idx) => {
        const day = moment.unix(data.dt).format("dddd");
        return (
          <Box key={idx}>
            <Box>
              {/* daily[0].weather[0].icon */}
              <Box sx={{ typography: "h5" }}>{day}</Box>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <img
                  style={{ width: 50, height: 50 }}
                  src={getForecastIconURL(data)}
                  alt="Forecast Icon"
                />
                <Box sx={{ display: "flex", typography: "body1" }}>
                  {data.weather[0].main}
                </Box>
              </Box>
            </Box>
            <Box sx={{ typography: "h5" }}>High : {data.temp.max}</Box>
            <Box sx={{ typography: "h5" }}>Low : {data.temp.min}</Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Forecast;
