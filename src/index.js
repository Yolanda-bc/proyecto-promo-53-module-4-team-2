const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");
require("dotenv").config();

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

// ENDPOINTS DE APIS

server.get("/api/projects", async (req, res) => {
  const conn = await getConnection();
  const projectId = req.query.id;
  let response = [];
  if (req.query.id) {
    [response] = await conn.query(`
     SELECT * FROM molones.data_author
  JOIN molones.data_project ON (molones.data_author.data_project_id = molones.data_project.id) WHERE molones.data_project.id = ${projectId};`);
  } else {
    [response] = await conn.query(`
     SELECT * FROM molones.data_author
  JOIN molones.data_project ON (molones.data_author.data_project_id = molones.data_project.id);`);
  }

  await conn.end();

  res.json(response);
});

server.post("/api/projects", async (req, res) => {
  const conn = await getConnection();

  const [resultsInsertProject] = await conn.execute(
    `INSERT INTO molones.data_project (name,slogan,technologies,repo,demo,\`desc\`,photo)
      VALUES
        ( ? , ?, ? ,? ,? ,? ,? )`,
    [
      req.body.name,
      req.body.slogan,
      req.body.technologies,
      req.body.repo,
      req.body.demo,
      req.body.desc,
      req.body.photo,
    ]
  );

  const projectId = resultsInsertProject.insertId;

  const [resultsInsertAuthor] = await conn.execute(
    `INSERT INTO molones.data_author (author,job,image,data_project_id)
       VALUES
         (?,? ,? ,? );`,
    [req.body.author, req.body.job, req.body.image, projectId]
  );

  await conn.end();

  res.json({
    success: true,
    /* cardURL: url, para ver el detalle `http://localhost:4000`+ proyectId */
  });
});

// SERVIDOR DE FICHEROS ESTÁTICOS

server.use(express.static(path.join(__dirname, "../FRONTEND")));

// NO ENCONTRADO

server.use(/.*/, (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../FRONTEND/error404.html"));
});
