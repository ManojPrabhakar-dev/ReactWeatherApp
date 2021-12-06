import React from "react";
import Moment from "react-moment";
import moment from "moment";
import { Button, Box } from "@mui/material";
import { getForecastIconURL } from "../utils/icons";

const Forecast = ({ forecastData }) => {
  return (
    <div>
      <h1>5-day Forecast</h1>
      {forecastData.daily.slice(1, 6).map((data, idx) => {
        const day = moment.unix(data.dt).format("dddd");
        return (
          <div key={idx}>
            <h1>{day}</h1>
            <Box>
              {/* daily[0].weather[0].icon */}
              <img
                style={{ width: 70, height: 70 }}
                src={getForecastIconURL(data)}
                alt="Forecast Icon"
              />
              <p>{data.weather[0].main}</p>
            </Box>
            <h2>High : {data.temp.max}</h2>
            <h2>Low : {data.temp.min}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
