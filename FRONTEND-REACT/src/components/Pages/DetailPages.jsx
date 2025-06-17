import { useState } from "react";
import Hero from "../Layout/Hero";
import Card from "../Projects/Card";

function DetailPages() {
  const [data] = useState(() => {
    const savedData = localStorage.getItem("data");

    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          slogan: "",
          repo: "",
          demo: "",
          technologies: "",
          desc: "",
          author: "",
          job: "",
          photo: "",
          image: "",
        };
  });
  return (
    <>
      <Hero />
      <Card
        name={data.name}
        slogan={data.slogan}
        repo={data.repo}
        demo={data.demo}
        technologies={data.technologies}
        desc={data.desc}
        author={data.author}
        job={data.job}
        photo={data.photo}
        image={data.image}
      />
    </>
  );
}

export default DetailPages;
