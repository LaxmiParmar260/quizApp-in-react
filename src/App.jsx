import React from 'react';
import Quiz from './components/Quiz';

const App = () => {
  const questions = [
    {
      question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      options: ["Boolean", "Undefined", "Object", "Integer"],
      correctAnswer: "Object",
    },
    {
      question: "Which function is used to serialize an object into a JSON string in Javascript?",
      options: ["stringify()",'parse()', "convert()", "None of The Above"],
      correctAnswer: "stringify()",
    },
    {
      question: "Which of the following are closures in Javascript?",
      options: ["Variables", "Functions", "Objects", "All Of The Above"],
      correctAnswer: "All Of The Above",
    },
    {
      question: " Which of the following is not a Javascript framework?",
      options: ["Node", "Vue", "React", "Cassandra"],
      correctAnswer: "Cassandra",
    },
    {
      question: "How can a datatype be declared to be a constant type?",
      options: ["Const", "Var", "Let", "Constant"],
      correctAnswer: "Const",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quiz App</h1>
      <Quiz questions={questions} />
    </div>
  );
};

export default App;
