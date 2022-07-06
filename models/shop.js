const mongoose = require('mongoose');

const shops_schema = new mongoose.Schema({
    nombre: { type: String, required: true},
    descripcion: { type: String, required: true},
    direccion: { type: String, required: true},
    telefono: { type: String, required: true},
    sitio_web: { type: String},
    facebook_url: { type: String},
    instagram_url: { type: String},
    email: { type: String},
    banner_imagen_url: { type: String, required: true},
    perfil_imagen_url: { type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'}
})

module.exports = mongoose.model('shop',shops_schema);