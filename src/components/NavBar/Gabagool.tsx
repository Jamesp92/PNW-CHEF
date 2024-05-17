import * as React from "react";
import Box from "@mui/material/Box";

const Gabagool: React.FC = () => {
  return (
    <Box
      component="img"
      src="/gabagool.png"
      alt="Logo"
      sx={{
        height: "40px",
        mx: 1,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "rotate(15deg)",
        },
      }}
    />
  );
};

export default Gabagool;
