import React from "react";
import { Box, Button } from "@mui/material";

// A pure component to render navigation buttons to the user
export const QuestionNavigation = ({
  handlePrev,
  handleNext,
  disablePrevBtn,
  disableNextBtn,
}) => (
  <Box sx={{ margin: "10em 1em 0 1em" }}>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        sx={{
          backgroundColor: "#A3CDDD",
          color: "#4B98B2",
          borderRadius: "10px",
        }}
        disabled={disablePrevBtn}
        onClick={handlePrev}
      >
        Previous
      </Button>
      <Button
        sx={{
          backgroundColor: "#4B98B2",
          color: "#FFFFFF",
          borderRadius: "10px",
        }}
        onClick={handleNext}
      >
        Next
      </Button>
    </Box>
  </Box>
);
