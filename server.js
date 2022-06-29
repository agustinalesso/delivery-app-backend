//Importaciones
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//Importo la Base de Datos conectada
require('./config/database');

//Instancia de rutas de servidor
const USER_ROUTES = require('./routes/user');
const AUTH_ROUTES = require('./routes/auth');

//Instancia e inicialización de Express
const server = express();

//Pase de implementaciones a Express
server.use(cors());
server.use(express.json());
server.use('/user', USER_ROUTES);
server.use('/auth', AUTH_ROUTES);

//Inicialización de servidor
server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${process.env.PORT}`);
})