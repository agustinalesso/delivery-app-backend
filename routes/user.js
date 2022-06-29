//Importaciones
const express = require('express');
const USER_ROUTES = express.Router();
const { user_getUser, user_getAllUsers, user_updateUser, user_deleteUser } = require('../controllers/user');

//Declaración de rutas
USER_ROUTES.route('/')
    .get(user_getAllUsers)
USER_ROUTES.route('/:uid')
    .get(user_getUser)
    .put(user_updateUser)
    .delete(user_deleteUser)

//Exportaciones
module.exports = USER_ROUTES;