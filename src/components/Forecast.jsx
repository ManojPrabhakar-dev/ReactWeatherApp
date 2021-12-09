import React from "react";
import Moment from "react-moment";
import moment from "moment";
import { Button, Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { getCurrentIconURL } from "../utils/icons";

const Forecast = ({ forecastData, updateWeatherInfo }) => {
  // onClick={()=>{
  //   updateWeatherInfo(forecastData[idx]);
  // }}

  function handleClick(idx) {
    updateWeatherInfo(forecastData[idx]);
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
      {forecastData.map((data, idx) => {
        const day = moment.unix(data.dateTime).format("dddd");
        return (
          <Card key={idx} sx={{ backgroundColor: "#c1c9c7" }}>
            <Button
              onClick={() => {
                updateWeatherInfo(forecastData[idx]);
              }}
            >
              <Box sx={{ color: "#333" }}>
                <Box sx={{ typography: "h6" }}>{day}</Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <CardMedia
                    component="img"
                    style={{ width: 50, height: 50 }}
                    image={getCurrentIconURL(data)}
                    alt="Forecast Icon"
                  />
                  <Box sx={{ display: "flex", typography: "body1" }}>
                    {data.weather}
                  </Box>
                </Box>

                <Box sx={{ typography: "h6" }}>High : {data.high}</Box>
                <Box sx={{ typography: "h6" }}>Low : {data.low}</Box>
              </Box>
            </Button>
          </Card>
        );
      })}
    </Box>
  );
};

export default Forecast;
