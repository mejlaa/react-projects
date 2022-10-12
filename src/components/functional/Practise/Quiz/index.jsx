import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const question = [
    {
      questionText: "Who is Aleksandar Vucic?",
      ansQuestion: [
        { ansText: "President of Serbia", isCorrect: true },
        { ansText: "Idiot", isCorrect: false },
        { ansText: "President of Bosnia", isCorrect: false },
        { ansText: "President of Montenegro", isCorrect: false },
      ],
    },
    {
      questionText: "?",
      ansQuestion: [
        { ansText: "Something", isCorrect: false },
        { ansText: "Nothing", isCorrect: false },
        { ansText: "Anything", isCorrect: false },
        { ansText: "Everything", isCorrect: true },
      ],
    },
    {
      questionText: "Who is Ana Ivanovic?",
      ansQuestion: [
        { ansText: "Model", isCorrect: false },
        { ansText: "Tennis player", isCorrect: true },
        { ansText: "Novak's wife ", isCorrect: false },
        { ansText: "Basketball player", isCorrect: false },
      ],
    },
    {
      questionText: "Who is Aleksandar Vucic?",
      ansQuestion: [
        { ansText: "President of Serbia", isCorrect: true },
        { ansText: "Idiot", isCorrect: false },
        { ansText: "President of Bosnia", isCorrect: false },
        { ansText: "President of Montenegro", isCorrect: false },
      ],
    },
    {
      questionText: "Bla bla?",
      ansQuestion: [
        { ansText: "bla alb", isCorrect: false },
        { ansText: "alb", isCorrect: false },
        { ansText: "bla", isCorrect: false },
        { ansText: "alb alb", isCorrect: true },
      ],
    },
    {
      questionText: "Who is Ana Ivanovic?",
      ansQuestion: [
        { ansText: "Model", isCorrect: false },
        { ansText: "Tennis player", isCorrect: true },
        { ansText: "Novak's wife ", isCorrect: false },
        { ansText: "Basketball player", isCorrect: false },
      ],
    },
    {
      questionText: "Who is Aleksandar Vucic?",
      ansQuestion: [
        { ansText: "President of Serbia", isCorrect: true },
        { ansText: "Idiot", isCorrect: false },
        { ansText: "President of Bosnia", isCorrect: false },
        { ansText: "President of Montenegro", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState();
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const answerClickHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          You scored {score} of {question.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{question.length}
            </div>
            <div className="question-text">
              {question[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {question[currentQuestion].ansQuestion.map((answerOption) => (
              <button
                onClick={() => answerClickHandler(answerOption.isCorrect)}
              >
                {answerOption.ansText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
