const express = require("express");
const router = express.Router();

router.get("/album", (request, response) => {
  //  response.status(200).send(`<h1>Hello world</h1>`);
  response.render('album1')
 });

 module.exports = router;