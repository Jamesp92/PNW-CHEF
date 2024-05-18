import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import grey from "@mui/material/colors/grey";
import Gabagool from "./Gabagool";

const color = grey[50];
const leftPages = ["Home", "Products"];
const rightPages = ["Pricing", "Blog"];

function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: color,
        top: 0,
        marginBottom: 0,
        paddingBottom: 0,
        height: "64px",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          {/* Left-side navigation items */}
          <Box sx={{ display: "flex", flexGrow: 0.5, justifyContent: "right" }}>
            {leftPages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid black",
                    background: "none",
                  },
                  "&:focus": {
                    outline: "none",
                    borderBottom: "2px solid black",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Center text with logo in between */}
          <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              PNW
            </Typography>
            <Gabagool /> {/* Use the Logo component */}
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              CHEF
            </Typography>
          </Box>

          {/* Right-side navigation items */}
          <Box sx={{ display: "flex", flexGrow: 0.5 }}>
            {rightPages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid black",
                    background: "none",
                  },
                  "&:focus": {
                    outline: "none",
                    borderBottom: "2px solid black",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
