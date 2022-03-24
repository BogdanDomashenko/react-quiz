import {
  Container,
  Typography,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { PassСomplexityScale } from "../components";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: "20px",
};

const formContentStyle = {};

const buttonsStyle = {
  mt: "10px",
  display: "flex",
  justifyContent: "end",
};

function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [passStrengthValue, setPassStrengthValue] = React.useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    emailError && setEmailError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    passwordError && setPasswordError(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    confirmPasswordError && setConfirmPasswordError(false);
  };

  const handleSignupClick = () => {
    passStrengthValue !== "Too weak" && setPasswordError(false);

    if (!email) {
      setEmailError(true);
    } else if (passStrengthValue === "Too weak") {
      setPasswordError(true);
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      setConfirmPasswordError(true);
      setErrorMsg("Passwords do not match");
    } else {
      setErrorMsg(null);
    }
  };

  return (
    <Container>
      <Box sx={formStyle}>
        <Box sx={formContentStyle}>
          <Typography variant="h4">Sign Up</Typography>
          <Box sx={{ mt: "10px" }}>
            <TextField
              error={emailError}
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <TextField
              error={passwordError}
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <PassСomplexityScale
              password={password}
              passStrengthValue={passStrengthValue}
              setPassStrengthValue={setPassStrengthValue}
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <TextField
              error={confirmPasswordError}
              label="Confirm password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Box>
          <Box sx={buttonsStyle}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSignupClick}
            >
              Sign up
            </Button>
          </Box>
          {errorMsg && <Typography variant="p">{errorMsg}</Typography>}
        </Box>
      </Box>
    </Container>
  );
}

export default Signup;
