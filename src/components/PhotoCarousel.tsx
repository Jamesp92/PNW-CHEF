import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";

const photos = [
  { url: "/photos/burger.jpg", alt: "Delicious Burger" },
  { url: "/photos/cheesecake.jpg", alt: "Delicious Cheesecake" },
  { url: "/photos/crabcakes.jpg", alt: "Delicious Crabcakes" },
  { url: "/photos/creme.jpg", alt: "Delicious Creme" },
  { url: "/photos/menu.jpg", alt: "Menu" },
  { url: "/photos/pig.jpg", alt: "Delicious Pig" },
  { url: "/photos/scallops.jpg", alt: "Delicious Scallops" },
  { url: "/photos/spread.jpg", alt: "Delicious Spread" },
  { url: "/photos/tablesetting.jpg", alt: "Table Setting" },
  // Add more photos as needed
];

const PhotoCarousel: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
      sx={{
        mt: 0,
        pt: 0,
        width: "100%",
        height: {
          xs: "200px",
          md: "550px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        top: 0,
        backgroundColor: "#f9f9f9",
      }}
    >
      {photos.map((photo, index) => (
        <ImageListItem
          key={index}
          sx={{
            position: index === currentPhotoIndex ? "relative" : "absolute",
            opacity: index === currentPhotoIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={photo.url}
            alt={photo.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the entire photo content is visible
            }}
          />
        </ImageListItem>
      ))}
    </Box>
  );
};

export default PhotoCarousel;
