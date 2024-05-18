import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AboutMe: React.FC = () => {
  return (
    <Box
      sx={{ padding: "2rem", backgroundColor: "#f9f9f9", textAlign: "center" }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          marginBottom: "1rem",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "black",
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          letterSpacing: ".1rem",
          color: "black",
          marginBottom: "1rem",
        }}
      >
        Welcome to PNW Chef! We specialize in providing gourmet catering
        services for all types of events. Our passion for cooking and commitment
        to excellence ensures that your event will be unforgettable. From
        intimate gatherings to large celebrations, we bring the finest
        ingredients and culinary expertise to your table.
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          letterSpacing: ".1rem",
          color: "black",
          marginBottom: "1rem",
        }}
      >
        Our chef is autistic and brings a unique perspective and creativity to
        the culinary world. Their attention to detail and dedication to
        perfection is reflected in every dish they create.
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          letterSpacing: ".1rem",
          color: "black",
        }}
      >
        Additionally, our chef is a big fan of the band Creed, and their music
        often inspires the ambiance and energy of our catering events.
      </Typography>
    </Box>
  );
};

export default AboutMe;
