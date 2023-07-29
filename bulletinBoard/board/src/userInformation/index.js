export const User = [
  {
    id: "사과",
    password: 1111,
    content: [content(1651), content(4989989), content(6666)],
  },
  {
    id: "바나나",
    password: 2222,
    content: [],
  },
  {
    id: "포도",
    password: 3333,
    content: [],
  },
];

export function content(div) {
  return <div>{div}</div>;
}

User[1].content.push(content(888888));
