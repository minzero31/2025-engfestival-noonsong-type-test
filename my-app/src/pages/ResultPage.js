import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NOONSONG_TYPES from "../data/noonsongtype";
import "../assets/styles/resultpage.css";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { winner } = state || {};

  if (!winner) {
    return (
      <div style={{ padding: 24 }}>
        <p>결과 정보가 없습니다.</p>
        <button onClick={() => navigate("/")}>처음으로</button>
      </div>
    );
  }

  const type = NOONSONG_TYPES[winner];

  return (
    <div className="background result-container">
      <h1 className="result-title">{type.name}</h1>
      <img src={type.image} alt={winner} className="result-image" />
      <div className="result-desc">{type.summary}</div>

      <div className="result-keywords">
        {type.keywords.map((kw, idx) => (
          <div key={idx} className="keyword-card keyword-white">
            {kw}
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/")} style={{ marginBottom: 40 }}>
        다시 테스트하기
      </button>
    </div>
  );
}