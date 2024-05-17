import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ mt: 8 }}>
        {" "}
        {/* Adjust the margin top to prevent overlap */}
        {/* Other components and content go here */}
      </Box>
    </div>
  );
};

export default App;
