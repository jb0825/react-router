import { useParams } from "react-router-dom";

export default function About() {
  let params = useParams();

  return (
    <div>
      <h2>About {params.name}</h2>
    </div>
  );
}
