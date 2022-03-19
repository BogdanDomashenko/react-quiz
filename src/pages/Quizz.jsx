import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { fetchQuizz } from "../redux/slices/quizzSlice";
import { Question, Questions, QuizzResult } from "../components";

function Quizz() {
  const [quizzForm, setQuizzForm] = React.useState([]);
  const [quizzCompleated, setQuizzCompleated] = React.useState(false);
  const [rate, setRate] = React.useState(0);
  const [maxRate, setMaxRate] = React.useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchQuizz(id));
  }, []);

  React.useEffect(() => {
    console.log(rate, "/", maxRate);
  });

  const { quizz } = useSelector((state) => state.quizz);

  function compare(a1, a2) {
    return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
  }

  const questionSelect = (id, answer) => {
    const currentQuizzId = quizzForm.findIndex((item) => item.id === id);
    const newQuizzForm = quizzForm;
    currentQuizzId >= 0
      ? (newQuizzForm[currentQuizzId].answer = answer)
      : newQuizzForm.push({ id, answer });
    setQuizzForm(newQuizzForm);

    console.log(quizzForm);
  };

  const calcQuizzResult = () => {
    const truthfulAnswers = [];

    setMaxRate(quizz.questions.length);

    quizz.questions.forEach((question) => {
      const answerToAdd = { id: question.id, answer: [] };
      question.answers.forEach(
        (answer) => answer.truthful && answerToAdd.answer.push(answer.id)
      );
      truthfulAnswers.push(answerToAdd);
    });

    let localRate = 0;

    quizzForm.forEach((quizzFormItem) => {
      truthfulAnswers.forEach((answer) => {
        if (answer.id === quizzFormItem.id) {
          quizzFormItem.answer.sort();
          compare(quizzFormItem.answer, answer.answer) && localRate++;
        }
      });
    });
    setRate(localRate);
    setQuizzCompleated(true);
  };

  const sendQuizz = () => {
    calcQuizzResult();
  };

  return (
    <div>
      {!quizzCompleated ? (
        <Container>
          {quizz.name ? (
            <Box>
              <Typography variant="h4">{quizz.name}</Typography>
              {quizz.questions.map((questions) => (
                <Box sx={{ mt: "15px", mb: "15px" }}>
                  <Question
                    key={questions.id}
                    id={questions.id}
                    text={questions.text}
                    answers={questions.answers}
                    img={questions.img}
                    onSelect={questionSelect}
                  />
                </Box>
              ))}
            </Box>
          ) : (
            ""
          )}
          <Box sx={{ mt: "30px" }}>
            <Button variant="contained" color="secondary" onClick={sendQuizz}>
              Отправить
            </Button>
          </Box>
        </Container>
      ) : (
        <QuizzResult rate={rate} maxRate={maxRate} />
      )}
    </div>
  );
}

export default Quizz;
