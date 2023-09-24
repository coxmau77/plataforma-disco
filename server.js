const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user.routes.js");
const PORT = 3000;

// midleware
app.use(express.json());
app.use('/', userRoute);

// NAME_DB
// plataformaDisco-db
// USER_NAME_DB
// coxmau77
// PASSWORD_DB
// T3hvyVdS7ZlCDBYx
// URL_DB
// mongodb+srv://coxmau77:<password>@plataformadisco-db.kja0uym.mongodb.net/

const dbPass = 'T3hvyVdS7ZlCDBYx';
const dbUrl = `mongodb+srv://coxmau77:${dbPass}@plataformadisco-db.kja0uym.mongodb.net/`;

const connectToMongoDB = async () => {
  try {
    
  } catch (error) {
    console.error('ERROR -->> ', error);
  }
};




app.listen(PORT, () => {
  console.log("Server ejecutando en http://localhost:" + PORT);
});
