import { useState, useEffect } from "react";
import Hero from "../Layout/Hero";
import PreviewCard from "../Projects/PreviewCard";

function Landing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/projects", {
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
      {" "}
      <Hero />
      <ul className="landing_card">
        {data.map((value, index) => (
          <li key={index}>
            <PreviewCard
              name={value.name}
              demo={value.demo}
              repo={value.repo}
              author={value.author}
              job={value.job}
              image={value.image}
              slogan={value.slogan}
              technologies={value.technologies}
              desc={value.desc}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Landing;
