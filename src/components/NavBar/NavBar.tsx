import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import grey from "@mui/material/colors/grey";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Gabagool from "./Gabagool";

const color = grey[50];
const pages = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

function NavBar() {
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: color,
          borderTop: { xs: "4px solid black", md: "none" }, // Add black line on top for mobile
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar disableGutters>
            {/* Left-side navigation items */}
            <Box
              sx={{ display: "flex", flexGrow: 0.5, justifyContent: "right" }}
            >
              {pages.slice(0, 2).map((page) => (
                <Button
                  key={page.label}
                  href={page.href}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    borderBottom: "2px solid transparent",
                    fontSize: { xs: "1rem", md: "1.25rem" }, // Adjust font size
                    mx: { xs: 1, md: 2 }, // Adjust margin for spacing
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
                  {page.label}
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
                  fontSize: { xs: "1rem", md: "1.5rem" }, // Adjust font size
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
                  fontSize: { xs: "1rem", md: "1.5rem" }, // Adjust font size
                  color: "black",
                  textDecoration: "none",
                }}
              >
                CHEF
              </Typography>
            </Box>

            {/* Right-side navigation items */}
            <Box sx={{ display: "flex", flexGrow: 0.5 }}>
              {pages.slice(2).map((page) => (
                <Button
                  key={page.label}
                  href={page.href}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    borderBottom: "2px solid transparent",
                    fontSize: { xs: "1rem", md: "1.25rem" }, // Adjust font size
                    mx: { xs: 1, md: 2 }, // Adjust margin for spacing
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
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {showBackToTop && (
        <Fab
          color="secondary"
          size="small"
          onClick={handleBackToTop}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
}

export default NavBar;
