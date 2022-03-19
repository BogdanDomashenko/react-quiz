import { Typography, Button, Box } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzes } from "../redux/slices/quizzesSlice";
import { useNavigate } from "react-router-dom";

function Questions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { quizzes } = useSelector((state) => state.quizzes);

  React.useEffect(() => {
    dispatch(fetchQuizzes());
  }, []);

  const joinQuizz = (code) => {
    navigate("/quizz/" + code, { replace: true });
  };

  return (
    <div>
      {quizzes.length &&
        quizzes.map(
          (quizz) =>
            quizz.type === "open" && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
                key={quizz.code}
              >
                <Typography variant="h5">{quizz.name}</Typography>
                <Button
                  variant="contained"
                  onClick={() => joinQuizz(quizz.code)}
                >
                  Go
                </Button>
              </Box>
            )
        )}
    </div>
  );
}

export default Questions;
