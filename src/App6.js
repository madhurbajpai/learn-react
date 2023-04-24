import "./App6.css";
import React from "react";
import Header from "./components/Header";
import { useState } from "react";

const App6 = () => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the ceo of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Russia?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Moscow", isCorrect: true },
        { answerText: "Washington D.C.", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Bhutan?",
      answerOptions: [
        { answerText: "Thimpu", isCorrect: true },
        { answerText: "Bern", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the vice-President of India?",
      answerOptions: [
        { answerText: "S. Jaishankar", isCorrect: false },
        { answerText: "Dharmendra Pradhan", isCorrect: false },
        { answerText: "Venkaiya Naidu", isCorrect: false },
        { answerText: "Jagdip Dhankad", isCorrect: true },
      ],
    },
  ];

  const [currentques, setCurrentques] = useState(0);
  const [showscore, setShowscore] = useState(false);
  const [score, setScore] = useState(0);

  const handleques = (correct) => {
    if(correct){
        const newscore = score + 1;
        setScore(newscore);
    }
    const nextques = currentques + 1;
    if (nextques < questions.length) setCurrentques(nextques);
    else setShowscore(true);
  };
  return (
    <div className="questions">
      <Header head="Quiz Game" />
      {showscore ? (
        <div className="score">You scored {score} out of {questions.length}</div>
      ) : (
        <div className="quest">
          <div className="quest-count">
            <span>Question {currentques+1}</span>/{questions.length}
          </div>
          <div className="quest-text">
            {questions[currentques].questionText}
          </div>
          <div className="answers">
            {questions[currentques].answerOptions.map((answerOption) => (
              <button className="ans" onClick={() => handleques(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App6;
