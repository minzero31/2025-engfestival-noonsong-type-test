import React, { useState } from "react";
import questionsData from "../data/questions.json";
import "../assets/styles/questionpage.css";
import Jalnan2 from "../assets/fonts/Jalnan2.ttf";
import noonsonghead from "../assets/images/questionpage/noonsonghead.png"
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
    const [questions] = useState(questionsData);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

        if (questions.length === 0) return <p>Loading...</p>;

        const handleAnswer = (option) => {
        const newAnswers = [...answers, { questionId: questions[current].id, answer: option }];
        setAnswers(newAnswers);

        if (current < questions.length - 1) {
        setCurrent(current + 1);
        } else {
        console.log("최종 답변:", newAnswers);
        navigate("/loading");
        }
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