import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions.json";
import "../assets/styles/questionpage.css";
import Jalnan2 from "../assets/fonts/Jalnan2.ttf";
import noonsonghead from "../assets/images/questionpage/noonsonghead.png"


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
      // 1) 응답 기록
      const newAnswers = [
        ...answers,
        { questionId: questions[current].id, answer: option.text }
      ];
  
      // 2) 점수 즉시 계산 (setState 비동기 의존 X)
      const updatedScores = { ...scores };
      if (Array.isArray(option.types)) {
        option.types.forEach((t) => {
          if (t in updatedScores) updatedScores[t] += 1;
        });
      }
  
      const isLast = current >= questions.length - 1;
  
      if (!isLast) {
        // 다음 문항으로 진행
        setAnswers(newAnswers);
        setScores(updatedScores);
        setCurrent(current + 1);
        return;
      }
  
      // 3) 마지막 문항 → 승자 계산 (동점 랜덤)
      const maxScore = Math.max(...Object.values(updatedScores));
      const topTypes = Object.keys(updatedScores).filter((k) => updatedScores[k] === maxScore);
      const winner = topTypes[Math.floor(Math.random() * topTypes.length)];
  
      // 상태 업데이트 + 로딩 페이지로 이동 (로딩 후 /result로 넘기기)
      setAnswers(newAnswers);
      setScores(updatedScores);
      navigate("/loading", { state: { winner, scores: updatedScores, answers: newAnswers } });
    };  

    const progress = ((current + 1) / questions.length) * 100;

    return (
        <div className="background">
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
            
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
                <img src={noonsonghead} alt="" className="progress-icon" style={{ left: `calc(${progress}% - 20px)` }} />
            </div>

            <div className="question-container">
                <h1 className="question-number">{current + 1} / {questions.length}</h1>
                <h2 className="question" style={{ whiteSpace: "pre-line" }}>{questions[current].question}</h2>
                <div className="options">
                {questions[current].options.map((option, idx) => (
                <button key={idx} onClick={() => handleAnswer(option)} className="option-btn" style={{ whiteSpace: "pre-line" }}>
                    {option.text}
                </button>
                ))}
                </div>
            </div>
    </div>
    );
}