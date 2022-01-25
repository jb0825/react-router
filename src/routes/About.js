import { useParams } from "react-router-dom";
import { getDatas } from "data";

export default function About() {
  let params = useParams();
  let datas = getDatas();

  let result = datas
    .filter(i => i.name === params.name)
    .map((i, idx) => {
      return (
        <div key={idx}>
          <p>no: {i.no}</p>
          <p>name: {i.name}</p>
          <p>phone: {i.phone}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>About {params.name}</h2>
      {result.length === 0 ? <p>No Search Users!</p> : result}
    </div>
  );
}
