import { Route, Routes } from "react-router-dom";
import { Home, routes } from "routes";
import Nav from "./Nav";
import "./App.css";
import React from "react";

export default function App() {
  return (
    <div>
      Hello, React Router!
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        {routes.map((i, idx) => (
          <Route {...i} key={idx} />
        ))}
      </Routes>
    </div>
  );
}
