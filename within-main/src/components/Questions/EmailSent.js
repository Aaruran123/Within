import { Box } from "@mui/system";
import React from "react";
import { ReactComponent as Care } from "./../../images/care.svg";
import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const EmailSent = () => {
  const navigate = useNavigate()

  const handleContinue = ()=> {
    navigate('/content-library')
  }
  return (
    <Box sx={{ textAlign: "center" }}>
      <Care width={200}/>
      <Box>
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: "1.5em", color: "#4B98B2" }}
        >
          We care for you
        </Typography>
        <Typography
          component="h3"
          variant="h3"
          sx={{ fontSize: "1em", marginBottom: "1em", color: "#4B98B2" }}
        >
          {" "}
          An email has been sent to the University Counsellor
        </Typography>
        <Button
        sx={{
          backgroundColor: "#4B98B2",
          color: "#FFFFFF",
          borderRadius: "10px",
        }}
      onClick={handleContinue}>
        Continue
      </Button>
      </Box>
    </Box>
  );
};
