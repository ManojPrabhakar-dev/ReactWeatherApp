import React from "react";
import { Box, Container } from "@mui/material";

const ResponsiveLayout = () => {
  return (
    <Box
      sx={{
        width: "80%",
        height: "100vh",
        mx: "auto",
        backgroundColor: "green",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(12, 1fr)",
          height: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "yellow",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            // gridColumn: "1",
            gridRow: "span 6",
          }}
        >
          Item
        </Box>
        <Box
          sx={{
            bgcolor: "yellow",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            // gridColumn: "6",
            gridRow: "span 4",
          }}
        >
          Item
        </Box>
        <Box
          sx={{
            bgcolor: "yellow",
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: "center",
            // gridColumn: "8",
            gridRow: "span 2",
          }}
        >
          Item
        </Box>
      </Box>
    </Box>
  );
};

export default ResponsiveLayout;
