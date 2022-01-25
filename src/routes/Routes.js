import About from "./About";

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
