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

// EJEMPLO DE ENDPOINT

server.get("/", (req, res) => {
  console.log("Holis"); // -> Se ve en la terminal

  res.send("Holis Adalabers!!!"); // -> Se ve en la página
});

// ENDPOINTS DE APIS

server.get("/api/cosas", (req, res) => {
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
