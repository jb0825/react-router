// 라우터들을 불러와 한 파일로 내보낼 수 있도록 인덱스파일 생성

import About from "./About";

export { default as Home } from "./Home";
export { default as About } from "./About";

export const routes = [
  { path: "/about", element: <About /> },
  { path: "/about/:name", element: <About /> },
  { path: "*", element: <p>There's nothing here!</p> },
];

export const links = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/about/test", text: "About Test" },
];
