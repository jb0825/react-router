import { useParams, useSearchParams } from "react-router-dom";
import { getData } from "data";

export default function About() {
  let [searchParams, setSearchParams] = useSearchParams();
  let params = useParams();
  let data = getData(params.name);
  let filter = searchParams.get("filter");

  if (filter != null)
    data = data.filter(d =>
      d.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <h2>About {params.name}</h2>
      {data.map((d, idx) => {
        return (
          <div key={idx} style={{ marginBottom: "20px" }}>
            <div>no: {d.no}</div>
            <div>name: {d.name}</div>
            <div>phone: {d.phone}</div>
          </div>
        );
      })}
    </div>
  );
}
