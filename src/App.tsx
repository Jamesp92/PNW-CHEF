import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PhotoCarousel from "./components/PhotoCarousel";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/Gallery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactForm from "./components/ContactForm";

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
      <Box id="home" sx={{ flexGrow: 1, mt: "64px" }}>
        <PhotoCarousel />
      </Box>
      <Box id="about" sx={{ flexGrow: 1, textAlign: "center", color: "black" }}>
        <AboutMe />
      </Box>
      <Box
        id="gallery"
        sx={{ flexGrow: 1, textAlign: "center", color: "black" }}
      >
        <Gallery />
      </Box>
      <Box
        id="contact"
        sx={{ flexGrow: 1, textAlign: "center", color: "black" }}
      >
        <ContactForm />
      </Box>
      <Box id="blog" sx={{ flexGrow: 1, textAlign: "center", color: "black" }}>
        <Typography variant="h2">Blog Section</Typography>
        <Typography variant="body1">Latest blog posts...</Typography>
      </Box>
    </div>
  );
};

export default App;
