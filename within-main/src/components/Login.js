import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ReactComponent as WithinTextLogo } from "./../images/within-logo-text.svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();
  // auth credentials on Login Button Click and redirect to questionnaire
  const handleLogin = () => {
    if (validateCredentials()) {
      navigate("/questionnaire");
    } else {
      // Show alert on failure of credential validation
      alert("Please try again");
    }
  };

  // Initalizing states for studentID and Password
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  // credentials validation
  const validateCredentials = () =>
    studentID &&
    studentID.length == 7 &&
    studentID.charAt(0) == "S" &&
    password &&
    password.length == 6;

  return (
    <Box sx={{ marginTop: "2em", textAlign: "center" }}>
      {/* Within Logo */}
      <Box>
        <WithinTextLogo width={300} height={300} />
      </Box>
      <Box>
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: "1.5em", color: "#4B98B2" }}
        >
          {" "}
          Login{" "}
        </Typography>
        <Typography
          component="h3"
          variant="h3"
          sx={{ fontSize: "1em", marginBottom: "1em", color: "#4B98B2" }}
        >
          {" "}
          Enter your details
        </Typography>

        {/* Input field for Student ID */}
        <Box width={"100%"} sx={{ marginBottom: "1em" }}>
          <TextField
            id="outlined-basic"
            label="Student ID"
            variant="outlined"
            size="small"
            sx={{ borderColor: "#4B98B2 !important" }}
            onChange={(e) => setStudentID(e.target.value)}
            value={studentID}
          />
        </Box>
        {/* Input field for the password */}
        <Box width={"100%"}>
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Box>

{/* Login button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            padding: "0 6em",
            marginTop: "1em",
            backgroundColor: "#4B98B2",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography
          component="p"
          variant="p"
          sx={{ fontSize: ".6em", marginTop: ".5em", color: "#C4C4C4" }}
        >
          {" "}
          If you have trouble signing in, contact your IT Admin
        </Typography>
      </Box>
    </Box>
  );
};
