import React, { useState } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import WeatherData from "./components/WeatherData";


function App() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "1fr 5fr 1fr",
          height: "100vh",
          bgcolor: "#e5dede",
        }}
      >
        <Header />
        <WeatherData />
        {/* <Router>
          <div>
            <Routes>
              <Route path="/" exact element={<WeatherData />} />
              <Route path="/quiz" element={<Forecast />} />
            </Routes>
          </div>
        </Router> */}
        <Footer />
      </Box>
    </>
  );
}

export default App;
