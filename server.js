const express = require('express');
// const mongoose = require("mongoose");
require("mongoose");
const app = express();
const userRoute = require("./routes/user.routes.js");
const PORT = 3000;

// Set EJS para el motor de plantillas
app.set('view engine', 'ejs');

// midleware
// Set public static
app.use(express.static('public'));

// Para que procese la info que enviaremos de un form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', userRoute);

require('dotenv').config();

// NAME_DB
// plataformaDisco-db
// USER_NAME_DB
// coxmau77
// PASSWORD_DB
// T3hvyVdS7ZlCDBYx
// URL_DB
// mongodb+srv://coxmau77:<password>@plataformadisco-db.kja0uym.mongodb.net/

const NAME_DB = process.env.NAME_DB;
const USER_NAME_DB = process.env.USER_NAME_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;
const URL_DB = process.env.URL_DB;

// const connectToMongoDB = async () => {
//   try {

    
    
//   } catch (error) {
//     console.error('ERROR -->> ', error);
//   }
// };

app.listen(PORT, () => {
  console.log(`Server ejecutando en http://localhost:${PORT}`);
});
