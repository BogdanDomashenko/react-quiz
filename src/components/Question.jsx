import React from "react";
import styled from "styled-components";
import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

const Picture = styled.img`
  max-height: 300px;
`;

function Question({ text, answers, img }) {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [selectedAnswers, setSelectedAnswers] = React.useState([1, 2]);

  const multimplyQuestion =
    answers.filter((answer) => answer.truthful).length > 1;

  const selectedAnswerChange = (e) => {
    if (!multimplyQuestion) {
      setSelectedAnswer(Number(e.target.value));
    } else {
      e.target.checked
        ? setSelectedAnswers([...selectedAnswers, Number(e.target.value)])
        : setSelectedAnswers(
            selectedAnswers.filter(
              (answer) => answer !== Number(e.target.value)
            )
          );
    }
  };

  return (
    <div>
      <FormControl>
        <Typography variant="h5">{text}</Typography>
        {img && <Picture src={img}></Picture>}
        {!multimplyQuestion ? (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={selectedAnswer}
            onChange={selectedAnswerChange}
          >
            {answers.map((answer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                control={<Radio />}
                label={answer.text}
              />
            ))}
          </RadioGroup>
        ) : (
          <FormGroup value={selectedAnswers} onChange={selectedAnswerChange}>
            {answers.map((answer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                control={<Checkbox />}
                label={answer.text}
              />
            ))}
          </FormGroup>
        )}
      </FormControl>
    </div>
  );
}

export default Question;
