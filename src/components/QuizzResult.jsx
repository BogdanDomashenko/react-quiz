import React from "react";
import { Container, Typography } from "@material-ui/core";

function QuizResult({ rate, maxRate }) {
  return (
    <Container>
      <Typography variant="h3">
        You scored {rate} / {maxRate}
      </Typography>
    </Container>
  );
}

export default QuizResult;
