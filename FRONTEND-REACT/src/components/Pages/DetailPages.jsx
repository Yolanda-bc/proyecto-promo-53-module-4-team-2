import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../Layout/Hero";
import Card from "../Projects/Card";

function DetailPages() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/projects?id=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        setData(dataResponse);
      });
  }, []);
  return (
    <>
      <Hero />
      <Card
        name={data[0]?.name}
        slogan={data[0]?.slogan}
        repo={data[0]?.repo}
        demo={data[0]?.demo}
        technologies={data[0]?.technologies}
        desc={data[0]?.desc}
        author={data[0]?.author}
        job={data[0]?.job}
        photo={data[0]?.photo}
        image={data[0]?.image}
      />
    </>
  );
}

export default DetailPages;
