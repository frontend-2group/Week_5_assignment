export const User = [
  {
    id: "사과",
    password: 1111,
    content: ["1111111111", "55"],
  },
  {
    id: "바나나",
    password: 2222,
    content: ["2222222222"],
  },
  {
    id: "포도",
    password: 3333,
    content: ["3333333333"],
  },
  {
    id: "오렌지",
    password: 4444,
    content: ["4444444444"],
  },
  {
    id: "딸기",
    password: 5555,
    content: ["5555555555"],
  },
  {
    id: "수박",
    password: 6666,
    content: ["6666666666"],
  },
  {
    id: "참외",
    password: 7777,
    content: ["7777777777"],
  },
  {
    id: "망고",
    password: 8888,
    content: ["8888888888"],
  },
  {
    id: "멜론",
    password: 9999,
    content: ["9999999999"],
  },
  {
    id: "블루베리",
    password: 1010,
    content: ["1010101010"],
  },
];

const PageNumberArr = [];
for (let i = 0; i < User.length / 4; i++) {
  PageNumberArr.push(i + 1);
}

export default PageNumberArr;
