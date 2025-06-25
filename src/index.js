const express = require("express");
const cors = require("cors");
const path = require("path");

// Creamos una vari con el servidor
const server = express();

// Configuramos server para que funcione bien como API
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const port = 4000;
server.listen(port, () => {
  console.log(`Servidor iniciado <http://localhost:${port}>`);
});

async function getConnection() {
  const datosConexion = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
  };
  const conexion = await mysql.createConnection(datosConexion);
  await conexion.connect();
  return conexion;
}

// EJEMPLO DE ENDPOINT

server.get("/", (req, res) => {
  console.log("Holis"); // -> Se ve en la terminal

  res.send("Holis Adalabers!!!"); // -> Se ve en la página
});

// ENDPOINTS DE APIS

server.get("/api/projects", (req, res) => {
  res.json([
    {
      name: "proyecto 1",
      slogan: "slogan",
      desc: "descripción",
      technologies: "HTML-CSS-REACT",
      demo: "https://google.es/",
      repo: "https://github.com/",
      author: "Ivanico",
      job: "Profe",
      photo: "",
      image: "",
    },
    {
      name: "proyecto 2",
      slogan: "slogan 2",
      desc: "descripción",
      technologies: "HTML-CSS-REACT",
      demo: "https://google.es/",
      repo: "https://github.com/",
      author: "Ivanico",
      job: "Profe",
      photo: "",
      image: "",
    },
    {
      name: "proyecto 3",
      slogan: "slogan 3",
      desc: "descripción",
      technologies: "HTML-CSS-REACT",
      demo: "https://google.es/",
      repo: "https://github.com/",
      author: "Ivanico",
      job: "Profe",
      photo: "",
      image: "",
    },
    {
      name: "proyecto 4",
      slogan: "slogan 4",
      desc: "descripción",
      technologies: "HTML-CSS-REACT",
      demo: "https://google.es/",
      repo: "https://github.com/",
      author: "Ivanico",
      job: "Profe",
      photo: "",
      image: "",
    },
  ]);
});

server.post("/api/projects", (req, res) => {
  res.json({
    success: true,
    cosas: [{}, {}],
  });
});

// SERVIDOR DE FICHEROS ESTÁTICOS

server.use(express.static(path.join(__dirname, "../FRONTEND")));

// NO ENCONTRADO

server.use(/.*/, (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../FRONTEND/error404.html"));
});
