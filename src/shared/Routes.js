import { About } from "pages";

const routes = [
  { path: "/about", element: <About /> },
  { path: "/about/:name", element: <About /> },
  { path: "*", element: <p>There's nothing here!</p> },
];

export default routes;
