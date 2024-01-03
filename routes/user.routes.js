const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model.js");

router.get("/", (request, response) => {
  //  response.status(200).send(`<h1>Hello world</h1>`);
  response.render('index')
 });

 module.exports = router;