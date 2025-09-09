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
    summary: "도전과 에너지가 넘치는 성향",
    image: passionate,
    keywords: [
      { text: "겉차속따", className: "keyword-style-1" },
      { text: "갓생러", className: "keyword-style-2" },
      { text: "빠른 판단력", className: "keyword-style-3" },
      { text: "프로정신", className: "keyword-style-4" },
      { text: "솔직함", className: "keyword-style-5" },
      { text: "과정보다 결과", className: "keyword-style-6" },
      { text: "자신감 넘침", className: "keyword-style-7" },
    ],
  },
  "힐링": {
    name: "힐링 눈송이",
    summary: "주변에 편안함과 안정감을 주는 성향",
    image: healing,
    keywords: [
      { text: "다정함", className: "keyword-style-1" },
      { text: "정이 많음", className: "keyword-style-2" },
      { text: "신중함", className: "keyword-style-3" },
      { text: "혼잣말 자주 함", className: "keyword-style-4" },
      { text: "마음이 여림", className: "keyword-style-5" },
      { text: "좁지만\n 깊은 관계", className: "keyword-style-6" },
      { text: "기억력 좋음", className: "keyword-style-7" },
    ],
  },
  "모험가": {
    name: "모험가 눈송이",
    summary: "새로움을 추구하고 호기심이 많은 성향",
    image: adventurer,
    keywords: [
      { text: "긍정왕", className: "keyword-style-1" },
      { text: "충동 구매", className: "keyword-style-2" },
      { text: "뒤끝 없음", className: "keyword-style-3" },
      { text: "유행에 민감", className: "keyword-style-4" },
      { text: "변화를 선호함", className: "keyword-style-5" },
      { text: "흘러가는대로\n 살기", className: "keyword-style-6" },
      { text: "인간 비타민", className: "keyword-style-7"},
    ],
  },
  "예술가": {
    name: "예술가 눈송이",
    summary: "감성이 풍부하고\n 예술적 표현을 즐기는 성향",
    image: artist,
    keywords: [
      { text: "집순이", className: "keyword-style-1" },
      { text: "은근 철벽", className: "keyword-style-2" },
      { text: "우유부단", className: "keyword-style-3" },
      { text: "갈등 싫어함", className: "keyword-style-4" },
      { text: "나만의 추구미", className: "keyword-style-5" },
      { text: "피해주는 거\n 싫어함", className: "keyword-style-6" },
      { text: "배려심 깊음", className: "keyword-style-7"},
    ],
  },
  "리더": {
    name: "리더 눈송이",
    summary: "책임감 있고 주도적으로 이끄는 성향",
    image: leader,
    keywords: [
      { text: "현실적임", className: "keyword-style-1" },
      { text: "보부상", className: "keyword-style-2" },
      { text: "강철 멘탈", className: "keyword-style-3" },
      { text: "눈치 빠름", className: "keyword-style-4" },
      { text: "뚜렷한 호불호", className: "keyword-style-5" },
      { text: "지는 거\n 제일 싫어함", className: "keyword-style-6" },
      { text: "극한의 효율러", className: "keyword-style-7"},
    ],
  },
  "평화주의자": {
    name: "평화주의자 눈송이",
    summary: "갈등을 피하고\n 모두가 편하길 바라는 성향",
    image: pacifist,
    keywords: [
      { text: "예의 중시", className: "keyword-style-1" },
      { text: "눈물 많음", className: "keyword-style-2" },
      { text: "집순이", className: "keyword-style-3" },
      { text: "멀티 못함", className: "keyword-style-4" },
      { text: "낭만 주의자", className: "keyword-style-5" },
      { text: "소소한 행복\n 선호함", className: "keyword-style-6" },
      { text: "눈치 많이 봄", className: "keyword-style-7"},
    ],
  },
  "엉뚱": {
    name: "엉뚱 눈송이",
    summary: "예상 밖의 행동으로\n 웃음을 주는 유쾌한 성향",
    image: whimsical,
    keywords: [
      { text: "다재다능", className: "keyword-style-1" },
      { text: "호기심 대마왕", className: "keyword-style-2" },
      { text: "마이웨이", className: "keyword-style-3" },
      { text: "변덕쟁이", className: "keyword-style-4" },
      { text: "쿨함", className: "keyword-style-5" },
      { text: "관심 받는 거\n 좋아함", className: "keyword-style-6" },
      { text: "유연한 사고", className: "keyword-style-7"},
    ],
  },
  "수다쟁이": {
    name: "수다쟁이 눈송이",
    summary: "활발하고 대화 중심적인 외향적 성향",
    image: talker,
    keywords: [
      { text: "긍정왕", className: "keyword-style-1" },
      { text: "충동 구매", className: "keyword-style-2" },
      { text: "사차원", className: "keyword-style-3" },
      { text: "리액션 장인", className: "keyword-style-4" },
      { text: "표정관리 못함", className: "keyword-style-5" },
      { text: "노는 게 제일\n 좋음", className: "keyword-style-6" },
      { text: "유리 멘탈", className: "keyword-style-7"},
    ],
  },
  "차분": {
    name: "차분 눈송이",
    summary: "혼자 있는 시간을 즐기며 침착한 성향",
    image: calm,
    keywords: [
      { text: "독립성", className: "keyword-style-1" },
      { text: "간섭 싫어함", className: "keyword-style-2" },
      { text: "효율 중시", className: "keyword-style-3" },
      { text: "자유로움", className: "keyword-style-4" },
      { text: "연락 귀찮아함", className: "keyword-style-5" },
      { text: "귀찮은 거\n 딱 질색", className: "keyword-style-6" },
      { text: "호불호 명확", className: "keyword-style-7"},
    ],
  },
  "꿈꾸는": {
    name: "꿈꾸는 눈송이",
    summary: "미래지향적이고 상상력이 풍부한 성향",
    image: dreamer,
    keywords: [
      { text: "똑똑이", className: "keyword-style-1" },
      { text: "조언 전문가", className: "keyword-style-2" },
      { text: "철벽킹", className: "keyword-style-3" },
      { text: "감성보단 이성", className: "keyword-style-4" },
      { text: "시간 낭비 싫어함", className: "keyword-style-5" },
      { text: "남의 의견에\n 휘둘리지 않음", className: "keyword-style-6" },
      { text: "신중함", className: "keyword-style-7"},
    ],
  },
};

export default NOONSONG_TYPES;