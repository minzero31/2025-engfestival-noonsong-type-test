import React, { useState, useEffect } from "react";
import ns1 from "../assets/images/noonsongtype/꿈꾸는눈송이.svg";
import ns2 from "../assets/images/noonsongtype/리더눈송이.svg";
import ns3 from "../assets/images/noonsongtype/모험가눈송이.svg";
import ns4 from "../assets/images/noonsongtype/수다쟁이눈송이.svg";
import ns5 from "../assets/images/noonsongtype/엉뚱눈송이.svg";
import ns6 from "../assets/images/noonsongtype/열정눈송이.svg";
import ns7 from "../assets/images/noonsongtype/예술가눈송이.svg";
import ns8 from "../assets/images/noonsongtype/차분한눈송이.svg";
import ns9 from "../assets/images/noonsongtype/평화주의자눈송이.svg";
import ns10 from "../assets/images/noonsongtype/힐링눈송이.svg";
import Jalnan2 from "../assets/fonts/Jalnan2.ttf";
import "../assets/styles/loadingpage.css";

const noonsongImages = [
    ns1,ns2,ns3,ns4,ns5,ns6,ns7,ns8,ns9,ns10
];

// 눈송이 이미지 1초마다 변경(랜덤)
const LoadingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dotCount, setDotCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * noonsongImages.length);
            setCurrentIndex(randomIndex);
    }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const dotInterval = setInterval(() => {
            setDotCount(prev => (prev + 1) % 4);
        }, 500);

    return () => clearInterval(dotInterval);
    }, []);

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
    
        <div className="container">
            <img src={noonsongImages[currentIndex]} alt="" />
            <p>나만의 <br /> <span>눈송이</span> 찾는 중{".".repeat(dotCount)}</p>
        </div>
    </div>
   );
};

export default LoadingPage;

