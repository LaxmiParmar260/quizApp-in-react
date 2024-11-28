import React, { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
  const [Index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = questions[Index];


  //For mounting the data 
  useEffect(() => {
    if (timeLeft > 0 && !isQuizCompleted) {
      const countdown = setInterval(
        () => setTimeLeft((prev) => prev - 1),
        1000
      );
      return () => clearInterval(countdown);
    } else if (timeLeft === 0) {
      setIsQuizCompleted(true);
    }
  }, [timeLeft, isQuizCompleted]);

  const handleSubmit = (answer) => {
    setAnswer(answer);
  };


  //Move to next Quetions
  const moveToNextQuestion = () => {
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setAnswer(null);
    if (Index + 1 < questions.length) {
      setIndex(Index + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  //restart the quiz
  const restartQuiz = () => {
    setIndex(0);
    setAnswer(null);
    setScore(0);
    setTimeLeft(30);
    setIsQuizCompleted(false);
  };

  return (
    <div className="card shadow p-4">
      {!isQuizCompleted ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4 ">
            <h5>
              Question {Index + 1} of {questions.length}
            </h5>
            <h5>Time Left: {timeLeft}s</h5>
          </div>
          <h4>{currentQuestion.question}</h4>
          <div className="list-group mt-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action ${
                  answer === option ? "active" : ""
                }`}
                onClick={() => handleSubmit(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="btn btn-primary mt-4"
            onClick={moveToNextQuestion}
            disabled={!answer}
          >
            Next
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: <strong>{score}</strong> out of {questions.length}
          </p>
          <button className="btn btn-success mt-4" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
