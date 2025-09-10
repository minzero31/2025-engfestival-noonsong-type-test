import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../assets/styles/loadingpage.module.css"; 
import Jalnan2 from "../assets/fonts/Jalnan2.ttf";

import f1 from "../assets/images/noonsongtype/dreamer.svg";
import f2 from "../assets/images/noonsongtype/talker.svg";
import f3 from "../assets/images/noonsongtype/calm.svg";
import f4 from "../assets/images/noonsongtype/adventurer.svg";
import f5 from "../assets/images/noonsongtype/artist.svg";
import f6 from "../assets/images/noonsongtype/healing.svg";
import f7 from "../assets/images/noonsongtype/leader.svg";
import f8 from "../assets/images/noonsongtype/pacifist.svg";
import f9 from "../assets/images/noonsongtype/passionate.svg";
import f10 from "../assets/images/noonsongtype/whimsical.svg";

const FRAMES = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10];

export default function LoadingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { winner, scores, answers } = location.state || {};
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const it = setInterval(() => setIdx((p) => (p + 1) % FRAMES.length), 400);
    return () => clearInterval(it);
  }, []);

  useEffect(() => {
    const to = setTimeout(() => {
      navigate("/result", { state: { winner, scores, answers } });
    }, 3000);
    return () => clearTimeout(to);
  }, [navigate, winner, scores, answers]);

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

      <img src={FRAMES[idx]} alt="loading noonsong" className={styles.loadingImage} />
      <div className={styles.loadingText}>
        나만의 <br /> <span className={styles.loadingSpan}>눈송이</span> 찾는 중…
      </div>
    </div>
  );
}
