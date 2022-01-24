import { NavLink } from "react-router-dom";
import { links } from "./Routes";

export default function Nav() {
  console.log(links);

  // index Route : "/" 또는 "" 인덱스 패스일 경우 연결
  // * Route : Route 로 등록되지 않은 패스 처리

  // NavLink 는 Link 의 클릭 여부를 알 수 있다. (Link 대신 사용)
  return (
    <nav>
      {links.map((i, idx) => (
        <li key={idx}>
          <NavLink
            to={i.to}
            className={({ isActive }) => (isActive ? "red" : "blue")}
          >
            {i.text}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}
