const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.status(200).send(`<h1>Hello world</h1>`);
});

app.listen(PORT, () => {
  console.log("Server ejecutando en http://localhost:" + PORT);
});
