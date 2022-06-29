//Importaciones
const express = require('express');
const AUTH_ROUTES = express.Router();
const { auth_register } = require('../controllers/auth');

//Declaración de ruta
AUTH_ROUTES.route('/register')
    .post(auth_register)

//Exportaciones
module.exports = AUTH_ROUTES;