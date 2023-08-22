import React from "react";
import { Box } from "@mui/material";
import { Time } from "./components/time/Time";

function App() {
  return (
    <Box sx={{mt: '20px',display: 'flex', justifyContent: 'center' }}>
      <Time />
    </Box>
  );
}

export default App;
