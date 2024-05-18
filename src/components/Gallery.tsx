import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { images } from "./images"; // Adjust this path based on your folder structure

const Gallery: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleClickOpen = (index: number) => {
    setActiveStep(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? images.length - 1 : prevActiveStep - 1
    );
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === images.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center", color: "black" }}>
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        cols={4}
        rowHeight={100}
      >
        {images.map((item, index) => (
          <ImageListItem
            key={item.img}
            onClick={() => handleClickOpen(index)}
            sx={{ cursor: "pointer" }}
          >
            <img
              src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
              srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", left: 8, zIndex: 1 }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <img
            src={images[activeStep].img}
            alt={images[activeStep].title}
            style={{ width: "100%", maxHeight: "80vh" }}
          />
          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", right: 8, zIndex: 1 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Gallery;
