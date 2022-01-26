import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { links } from "routes";

export default function Nav() {
  // useLocation() : URL 에 대한 정보를 반환한다.
  let location = useLocation();
  console.log(location);

  // useNavigate().navigate(path) : path 경로로 이동시킨다.
  let navigate = useNavigate();

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
      <li>
        <button
          onClick={() => {
            navigate("/about/button");
          }}
        >
          Button Link
        </button>
      </li>
      <hr />
      <h3>React-Router v6 에서의 history</h3>
      <button onClick={() => navigate(-1)}>이전</button>
      <button onClick={() => navigate(1)}>다음</button>
      <hr />
      <Outlet />
    </nav>
  );
}
