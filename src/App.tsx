import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PhotoCarousel from "./components/PhotoCarousel";
import AboutMe from "./components/AboutMe";
import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Box sx={{ flexGrow: 1, mt: "64px" }}>
        <PhotoCarousel />
        <AboutMe />
      </Box>
    </div>
  );
};

export default App;
