import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NOONSONG_TYPES from "../data/noonsongtype";
import "../assets/styles/resultpage.css";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { winner } = state || {};

  if (!winner || !NOONSONG_TYPES[winner]) {
    return (
      <div style={{ padding: 24 }}>
        <p>결과 정보가 없습니다.</p>
        <button onClick={() => navigate("/")}>처음으로</button>
      </div>
    );
  }

  const type = NOONSONG_TYPES[winner];


const styleClasses = [
  "keyword-style-1","keyword-style-2","keyword-style-3",
  "keyword-style-4","keyword-style-5","keyword-style-6","keyword-style-7",
];


const renderKw = (kw, idx) => {
  const isObj = kw && typeof kw === "object";
  const text = isObj ? kw.text : kw;
  const cls = isObj && kw.className ? kw.className : styleClasses[idx];

  return (
    <div key={idx} className={`keyword-card ${cls}`}>
      {text}
    </div>
  );
};

return (
  <div className="background result-container">
    <h1 className="result-title">
      {type.name.split(" ")[0]} <span className="accent">눈송이</span>
    </h1>

    <img src={type.image} alt={winner} className="result-image" />
    <div className="result-desc">{type.summary}</div>

    <div className="keyword-board">
      {/* 왼쪽 */}
      <div className="keyword-col">
        {type.keywords.slice(0, 4).map((kw, i) => renderKw(kw, i))}
      </div>
      {/* 오른쪽 */}
      <div className="keyword-col">
        {type.keywords.slice(4).map((kw, i) => renderKw(kw, i + 4))}
      </div>
    </div>

    <button onClick={() => navigate("/")} className="retry-button">
      다시 테스트하기
    </button>
  </div>
  );
}