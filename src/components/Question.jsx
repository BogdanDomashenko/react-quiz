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
  Button,
} from "@material-ui/core";

const Picture = styled.img`
  max-height: 300px;
`;

function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = React.useRef(true);

  React.useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}

function Question({ id, text, answers, img, onSelect }) {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);

  // React.useEffect(() => {
  //   if (didMount.current) {
  //     onSelect(id, selectedAnswer);
  //   } else {
  //     didMount.current = true;
  //   }
  // }, [selectedAnswer]);

  // React.useEffect(() => {
  //   if (didMount.current) {
  //     onSelect(id, selectedAnswers);
  //   } else {
  //     didMount.current = true;
  //   }
  // }, [selectedAnswers]);

  // useUpdateEffect(() => {
  //   onSelect(id, selectedAnswers);
  // }, [selectedAnswers]);

  useUpdateEffect(() => {
    onSelect(id, selectedAnswers);
  }, [selectedAnswers]);

  const multimplyQuestion =
    answers.filter((answer) => answer.truthful).length > 1;

  const selectedAnswerChange = (e) => {
    if (!multimplyQuestion) {
      setSelectedAnswers([Number(e.target.value)]);
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
        <Typography variant="h5">
          {id}. {text}
        </Typography>
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
