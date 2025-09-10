import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions.json";
import styles from "../assets/styles/questionpage.module.css"; 
import Jalnan2 from "../assets/fonts/Jalnan2.ttf";
import noonsonghead from "../assets/images/questionpage/noonsonghead.png";

const ALL_TYPES = [
  "열정", "수다쟁이", "차분", "예술가", "평화주의자",
  "리더", "모험가", "엉뚱", "힐링", "꿈꾸는"
];

export default function QuestionPage() {
  const [questions] = useState(questionsData);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [scores, setScores] = useState(
    ALL_TYPES.reduce((acc, t) => ({ ...acc, [t]: 0 }), {})
  );

  const navigate = useNavigate();

  if (!questions || questions.length === 0) return <p>Loading...</p>;

  const handleAnswer = (option) => {
    const newAnswers = [
      ...answers,
      { questionId: questions[current].id, answer: option.text }
    ];

    const updatedScores = { ...scores };
    if (Array.isArray(option.types)) {
      option.types.forEach((t) => {
        if (t in updatedScores) updatedScores[t] += 1;
      });
    }

    const isLast = current >= questions.length - 1;

    if (!isLast) {
      setAnswers(newAnswers);
      setScores(updatedScores);
      setCurrent(current + 1);
      return;
    }

    const maxScore = Math.max(...Object.values(updatedScores));
    const topTypes = Object.keys(updatedScores).filter((k) => updatedScores[k] === maxScore);
    const winner = topTypes[Math.floor(Math.random() * topTypes.length)];

    setAnswers(newAnswers);
    setScores(updatedScores);
    navigate("/loading", { state: { winner, scores: updatedScores, answers: newAnswers } });
  };  

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className={styles.background}>
      <style>
        {`
          @font-face {
              font-family: "Jalnan2";
              src: url(${Jalnan2}) format('truetype');
              font-weight: normal;
              font-style: normal;
          }
        `}
      </style>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        <img
          src={noonsonghead}
          alt=""
          className={styles.progressIcon}
          style={{ left: `calc(${progress}% - 20px)` }}
        />
      </div>

      <div className={styles.questionContainer}>
        <h1 className={styles.questionNumber}>
          {current + 1} / {questions.length}
        </h1>
        <h2 className={styles.question} style={{ whiteSpace: "pre-line" }}>
          {questions[current].question}
        </h2>
        <div className={styles.options}>
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className={styles.optionBtn}
              style={{ whiteSpace: "pre-line" }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
