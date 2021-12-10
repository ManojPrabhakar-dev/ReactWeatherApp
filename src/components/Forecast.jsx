import React, { useEffect, useRef } from "react";
import Moment from "react-moment";
import moment from "moment";
import { Button, Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { getCurrentIconURL } from "../utils/icons";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const Forecast = ({ forecastData, updateWeatherInfo, updateTodayInfo }) => {
  const node = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function handleClick(e) {
    if (node.current.contains(e.target)) {
      console.log("Inside clicked");
      return;
    }

    console.log("outside clicked");
    updateTodayInfo();
  }

  return (
    <Box ref={node} sx={{ display: "flex", justifyContent: "space-evenly" }}>
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ArrowUpward />
                  <Box sx={{ ml: 1 }}>{data.high} &deg;c</Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ArrowDownward />
                  <Box sx={{ ml: 1 }}>{data.low} &deg;c</Box>
                </Box>
                {/* <Box sx={{ typography: "h6" }}>High : {data.high}</Box>
                <Box sx={{ typography: "h6" }}>Low : {data.low}</Box> */}
              </Box>
            </Button>
          </Card>
        );
      })}
    </Box>
  );
};

export default Forecast;
