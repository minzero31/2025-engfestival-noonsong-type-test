import passionate from "../assets/images/noonsongtype/passionate.svg";
import healing from "../assets/images/noonsongtype/healing.svg";
import adventurer from "../assets/images/noonsongtype/adventurer.svg";
import artist from "../assets/images/noonsongtype/artist.svg";
import leader from "../assets/images/noonsongtype/leader.svg";
import pacifist from "../assets/images/noonsongtype/pacifist.svg";
import whimsical from "../assets/images/noonsongtype/whimsical.svg";
import talker from "../assets/images/noonsongtype/talker.svg";
import calm from "../assets/images/noonsongtype/calm.svg";
import dreamer from "../assets/images/noonsongtype/dreamer.svg";

const NOONSONG_TYPES = {
  "열정": {
    name: "열정 눈송이",
    summary: "도전적, 에너지, 새로운 것에 긍정",
    image: passionate,
    keywords: [
      "겉차속따",
      "갓생러",
      "솔직함",
      "빠른 판단력",
      "프로정신",
      "과정보다 결과",
      "자신감 넘침",
    ],
  },
  "힐링": {
    name: "힐링 눈송이",
    summary: "위로, 감정 공감, 잔잔함",
    image: healing,
    keywords: [
      "다정함",
      "정이 많음",
      "신중함",
      "혼잣말 자주 함",
      "마음이 여림",
      "좁지만 깊은 관계",
      "기억력 좋음",
    ],
  },
  "모험가": {
    name: "모험가 눈송이",
    summary: "즉흥성, 새로움, 변화 추구",
    image: adventurer,
    keywords: [
      "긍정왕",
      "충동 구매",
      "뒤끝 없음",
      "유행에 민감",
      "변화를 선호함",
      "흘러가는대로\n 살기",
      "인간 비타민",
    ],
  },
  "예술가": {
    name: "예술가 눈송이",
    summary: "감성적, 창의적, 예쁘다는 말 잘함",
    image: artist,
    keywords: [
      "집순이",
      "은근 철벽",
      "우유부단",
      "갈등 싫어함",
      "나만의 추구미",
      "피해주는 거\n 싫어함",
      "배려심 깊음",
    ],
  },
  "리더": {
    name: "리더 눈송이",
    summary: "책임감, 계획형, 목표지향",
    image: leader,
    keywords: [
      "현실적임",
      "보부상",
      "강철 멘탈",
      "눈치 빠름",
      "뚜렷한 호불호",
      "지는 거 제일 싫어함",
      "극한의 효율러",
    ],
  },
  "평화주의자": {
    name: "평화주의자 눈송이",
    summary: "갈등 회피, 조화 중시, 배려",
    image: pacifist,
    keywords: [
      "예의 중시",
      "눈물 많음",
      "집순이",
      "멀티 못함",
      "낭만 주의자",
      "소소한 행복\n 선호함",
      "눈치 많이 봄",
    ],
  },
  "엉뚱": {
    name: "엉뚱 눈송이",
    summary: "독특함, 예상 밖, 유쾌함",
    image: whimsical,
    keywords: [
      "다재다능",
      "호기심 대마왕",
      "마이웨이",
      "변덕쟁이",
      "쿨함",
      "관심 받는 거\n 좋아함",
      "유연한 사고",
    ],
  },
  "수다쟁이": {
    name: "수다쟁이 눈송이",
    summary: "외향적, 말 많음, 리액션 풍부",
    image: talker,
    keywords: [
      "긍정왕",
      "충동 구매",
      "사차원",
      "리액션 장인",
      "표정관리 못함",
      "노는 게 제일\n 좋음",
      "유리 멘탈",
    ],
  },
  "차분": {
    name: "차분 눈송이",
    summary: "혼자, 신중, 조용, 관찰력",
    image: calm,
    keywords: [
      "독립성",
      "간섭 싫어함",
      "효율 중시",
      "자유로움",
      "연락 귀찮아함",
      "귀찮은 거\n 딱 질색",
      "호불호 명확",
    ],
  },
  "꿈꾸는": {
    name: "꿈꾸는 눈송이",
    summary: "상상력, 의미 부여, 미래지향",
    image: dreamer,
    keywords: [
      "똑똑이",
      "조언 전문가",
      "철벽킹",
      "감성보단 이성",
      "시간 낭비 싫어함",
      "남의 의견에\n 휘둘리지 않음",
      "신중함",
    ],
  },
};

export default NOONSONG_TYPES;
