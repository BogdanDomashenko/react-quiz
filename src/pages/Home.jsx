import React from "react";

import { Container, Box, Button } from "@material-ui/core";
import { Questions } from "../components";

function Home() {
  const answersList = [
    { id: 1, text: "swqkwjd", truthful: true },
    { id: 2, text: "khh", truthful: true },
    { id: 3, text: "khh", truthful: false },
  ];

  return (
    <Container>
      Open tests
      <Questions />
      {/* <Question
        text="deoiwfuiu"
        answers={answersList}
        img="https://cdnimg.rg.ru/img/content/146/91/37/googletranslate-1000_d_850.jpg"
      /> */}
    </Container>
  );
}

export default Home;
