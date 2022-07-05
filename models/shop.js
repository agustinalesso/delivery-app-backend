const mongoose = require('mongoose');

const shops_schema = new mongoose.Schema({
    nombre: { type: String, required: true},
    descripcion: { type: String, required: true},
    direccion: { type: String, required: true},
    telefono: { type: String, required: true},
    sitio_web: { type: String, required: true},
    facebook_url: { type: String, required: true},
    instagram_url: { type: String, required: true},
    email: { type: String, required: true},
    banner_imagen_url: { type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'usuario'}
})

module.exports = mongoose.model('shop',shops_schema);