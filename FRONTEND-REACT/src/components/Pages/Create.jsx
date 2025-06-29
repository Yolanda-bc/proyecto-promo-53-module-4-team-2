import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Projects/Card";
import Form from "../Projects/Form";

function Create() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaaaaaaa", data.name);
    if (
      data.name &&
      data.slogan &&
      data.repo &&
      data.demo &&
      data.technologies &&
      data.desc &&
      data.author &&
      data.job
    ) {
      fetch("http://localhost:4000/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((dataResponse) => {
          if (dataResponse.success && dataResponse.id) {
            navigate(`/DetailPages/${dataResponse.id}`);
          } else {
            console.error("Respuesta no válida de la API:", dataResponse);
          }
        })
        .catch((err) => console.error("Error en fetch:", err));
    } else {
      alert("Debes rellenar todos los campos");
    }
  };
  return (
    <div className="main_create">
      {" "}
      {/* <Hero /> */}
      <Card
        name={data?.name}
        slogan={data?.slogan}
        repo={data?.repo}
        demo={data?.demo}
        technologies={data?.technologies}
        desc={data?.desc}
        author={data?.author}
        job={data?.job}
        photo={data?.photo}
        image={data?.image}
      />
      <Form
        data={data}
        changeState={changeState}
        handleSubmit={handleSubmit}
        updateImage={updateImage}
        updatePhoto={updatePhoto}
      />
    </div>
  );
}

export default Create;
