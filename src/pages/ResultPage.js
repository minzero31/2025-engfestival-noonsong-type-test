import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NOONSONG_TYPES from "../data/noonsongtype";
import styles from "../assets/styles/resultpage.module.css";

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
    styles.keywordStyle1, styles.keywordStyle2, styles.keywordStyle3,
    styles.keywordStyle4, styles.keywordStyle5, styles.keywordStyle6, styles.keywordStyle7,
  ];

  const renderKw = (kw, idx) => {
    const isObj = kw && typeof kw === "object";
    const text = isObj ? kw.text : kw;
    const cls = isObj && kw.className ? kw.className : styleClasses[idx];

    return (
      <div key={idx} className={`${styles.keywordCard} ${cls}`}>
        {text}
      </div>
    );
  };

  return (
    <div className={`${styles.background} ${styles.resultContainer}`}>
      <h1 className={styles.resultTitle}>
        {type.name.split(" ")[0]} <span className={styles.accent}>눈송이</span>
      </h1>

      <img src={type.image} alt={winner} className={styles.resultImage} />
      <div className={styles.resultDesc}>{type.summary}</div>

      <div className={styles.keywordBoard}>
        <div className={styles.keywordCol}>
          {type.keywords.slice(0, 4).map((kw, i) => renderKw(kw, i))}
        </div>
        <div className={styles.keywordCol}>
          {type.keywords.slice(4).map((kw, i) => renderKw(kw, i + 4))}
        </div>
      </div>

      <button onClick={() => navigate("/")} className={styles.retryButton}>
        다시 테스트하기
      </button>
    </div>
  );
}
