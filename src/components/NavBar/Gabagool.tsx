import * as React from "react";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

// Define keyframes for rocking animation
const rockingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
`;

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
          animation: `${rockingAnimation} 1s infinite`,
        },
      }}
    />
  );
};

export default Gabagool;
