import { NavLink } from "react-router-dom";

export default function Nav() {
  let name = "test";

  // index Route : "/" 또는 "" 인덱스 패스일 경우 연결
  // * Route : Route 로 등록되지 않은 패스 처리

  // NavLink 는 Link 의 클릭 여부를 알 수 있다. (Link 대신 사용)
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "red" : "blue")}>
        Home
      </NavLink>{" "}
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "red" : "blue")}
      >
        About
      </NavLink>{" "}
      <NavLink
        to={`/about/${name}`}
        key={name}
        className={({ isActive }) => (isActive ? "red" : "blue")}
      >
        About Test
      </NavLink>
    </nav>
  );
}
