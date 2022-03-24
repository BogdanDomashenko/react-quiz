import React from "react";
import { passwordStrength } from "check-password-strength";
import { Box } from "@material-ui/core";

function PassСomplexityScale({
  password,
  passStrengthValue,
  setPassStrengthValue,
}) {
  const [progressBarWidth, setProgressBarWidth] = React.useState(0);
  const [progressBarColor, setProgressBarColor] = React.useState(null);

  const scaleStyle = {
    height: "15px",
    width: progressBarWidth + "%",
    bgcolor: progressBarColor,
  };

  React.useEffect(() => {
    setPassStrengthValue(passwordStrength(password).value);
    switch (passStrengthValue) {
      case "Too weak":
        setProgressBarWidth(25);
        setProgressBarColor("error.main");
        break;
      case "Weak":
        setProgressBarWidth(50);
        setProgressBarColor("warning.main");
        break;
      case "Medium":
        setProgressBarWidth(75);
        setProgressBarColor("primary.main");
        break;
      case "Strong":
        setProgressBarWidth(100);
        setProgressBarColor("success.main");
        break;
      default:
        break;
    }
  }, [password]);

  return (
    <div>
      {password.length ? (
        <div>
          <Box sx={scaleStyle}></Box>
          <div>{passStrengthValue} password</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PassСomplexityScale;
