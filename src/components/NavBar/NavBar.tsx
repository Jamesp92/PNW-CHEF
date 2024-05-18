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
  const navBarHeight = 64; // Adjust based on your NavBar height

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

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop - navBarHeight,
        behavior: "smooth",
      });
    }
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
            <Box
              sx={{ display: "flex", flexGrow: 0.5, justifyContent: "right" }}
            >
              {pages.slice(0, 2).map((page) => (
                <Button
                  key={page.label}
                  href={page.href}
                  onClick={(event) => handleScroll(event, page.href)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: { xs: "0.75rem", md: "0.875rem" }, // Adjust font size
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
                  fontSize: { xs: "0.875rem", md: "1.25rem" }, // Adjust font size
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
                  fontSize: { xs: "0.875rem", md: "1.25rem" }, // Adjust font size
                  color: "black",
                  textDecoration: "none",
                }}
              >
                CHEF
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexGrow: 0.5 }}>
              {pages.slice(2).map((page) => (
                <Button
                  key={page.label}
                  href={page.href}
                  onClick={(event) => handleScroll(event, page.href)}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: { xs: "0.75rem", md: "0.875rem" }, // Adjust font size
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
          size="small"
          onClick={handleBackToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
}

export default NavBar;
