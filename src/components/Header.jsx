import React from "react";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{ bgcolor: "rgb(241, 190, 21)", textAlign: "center", boxShadow: 4 }}
    >
      <Box sx={{ typography: "h3", py: 1 }}>React Weather App</Box>
    </Box>
  );
};

export default Header;
