import React from "react";
import "../assets/styles/mainpage.css";
import Jalnan2 from "../assets/fonts/Jalnan2.ttf";
import school from "../assets/images/mainpage/school.svg";
import snow from "../assets/images/mainpage/snow.svg";
import noonsong from "../assets/images/mainpage/noonsong.svg"

function MainPage({ handleStart }) {
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

        <div className="title">
            <h1>
            나만의 <span>눈송이</span> 
            <br />테스트
            </h1>
            <p className="message">
                <span
                className="message-text">나만의 눈송이는 어떤 유형일까?
                </span>
                </p>
        </div>

        <div className="image">
            <img src={school} alt="" className="schoolImg" />
            <img src={snow} alt="" className="snowImg" />
            <img src={noonsong} alt="" className="noonsongImg" />
            <div className="noonsongshadow"></div>
        </div>

        <button onClick={handleStart} className="start-btn">
            <span className="start-btn-text">시작하기</span>
        </button>
        </div>
    );
}

export default MainPage;