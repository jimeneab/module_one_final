const express = require("express");
var http = require("http");

const app = express();

app.get("/", function (_, res) {
  res.send("Hola Mundo!");
});

app.listen(3000, function () {
  console.log("Aplicación proyecto uno, escuchando el puerto 3000!");
});
