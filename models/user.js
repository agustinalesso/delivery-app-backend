//Importaciones
const mongoose = require('mongoose');

//Modelo de datos de usuario
const user_schema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    direccion: { type: String, required: true },
    google_uid: { type: String },
    roles: { type: [String],default: ['Usuario'] },
    telefono: { type: String },
    genero: { type: String },
    imagen_perfil: { type: String },
    fecha_nacimiento: { type: String }
});

//Exportaciones
module.exports = mongoose.model('usuario',user_schema);