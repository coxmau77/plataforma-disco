// Campos del formulario en base al modelo
// nombre
// nombre de usuario / apodo
// correo
// clave / contraseña
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   nombre: { type: String },
   nombreUsuario: { type: String, require: true, unique: true },
   correo: { type: String, require: true, unique: true },
   clave: { type: String, required: true },
});

const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;