import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
    alert("Form submitted!");
  };

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        flexDirection: "column",
        mt: 4,
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "80%", maxWidth: "600px" }}
      >
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="phone"
          label="Phone Number"
          variant="outlined"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="description"
          label="Description"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
