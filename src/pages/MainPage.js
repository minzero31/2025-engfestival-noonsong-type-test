import React from "react";
import styles from "../assets/styles/mainpage.module.css";
import Jalnan2 from "../assets/fonts/Jalnan2.ttf";
import school from "../assets/images/mainpage/school.svg";
import snow from "../assets/images/mainpage/snow.svg";
import noonsong from "../assets/images/mainpage/noonsong.svg";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/questions");
  };

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <h1>
          나만의 <span className={styles.titleSpan}>눈송이</span>
          <br />
          테스트
        </h1>
        <p className={styles.message}>
          <span className={styles.messageText}>
            나만의 눈송이는 어떤 유형일까?
          </span>
        </p>
      </div>

      <div className={styles.image}>
        <img src={school} alt="" className={styles.schoolImg} />
        <img src={snow} alt="" className={styles.snowImg} />
        <img src={noonsong} alt="" className={styles.noonsongImg} />
        <div className={styles.noonsongshadow}></div>
      </div>

      <button onClick={handleStart} className={styles.startBtn}>
        <span className={styles.startBtnText}>시작하기</span>
      </button>
    </div>
  );
}

export default MainPage;
