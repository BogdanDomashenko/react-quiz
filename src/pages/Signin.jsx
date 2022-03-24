import {
  Container,
  Typography,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

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
  justifyContent: "space-between",
};

function Signin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handeleSigninClick = () => {
    email && setEmailError(false);
    email && setPasswordError(false);

    email || setEmailError(true);
    password || setPasswordError(true);
  };

  return (
    <Container>
      <Box sx={formStyle}>
        <Box sx={formContentStyle}>
          <Typography variant="h4">Sign in</Typography>
          <Box sx={{ mt: "10px" }}>
            <TextField
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
            />
          </Box>
          <Box sx={{ mt: "10px" }}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
            />
          </Box>
          <Box sx={buttonsStyle}>
            <Link to="/sign-up">are not registered</Link>
            <Button
              variant="contained"
              size="large"
              onClick={handeleSigninClick}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Signin;
