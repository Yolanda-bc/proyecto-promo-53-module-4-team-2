import { useState, useEffect } from "react";
import Hero from "../Layout/Hero";
import Card from "../Projects/Card";
import Form from "../Projects/Form";

function Create() {
  const [data, setData] = useState(() => {
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

  const changeState = (field, value) => {
    setData((prevData) => ({
      ...prevData,

      [field]: value,
    }));
  };

  const updateImage = (newImage) => {
    setData({
      ...data,
      image: newImage,
    });
  };

  const updatePhoto = (newPhoto) => {
    setData({
      ...data,
      photo: newPhoto,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Llamando al handleSubmit de mamá!");

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        console.log(dataResponse);
      });
  };
  useEffect(() => {
    console.log("Guardando en localStorage:", data);
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <>
      {" "}
      {/* <Hero /> */}
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
      <Form
        data={data}
        changeState={changeState}
        handleSubmit={handleSubmit}
        updateImage={updateImage}
        updatePhoto={updatePhoto}
      />
    </>
  );
}

export default Create;
