//Importaciones
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//Importo la Base de Datos conectada
require('./config/database');

//Instancia de rutas de servidor
const USER_ROUTES = require('./routes/user');
const AUTH_ROUTES = require('./routes/auth');
const MYSHOP_ROUTES = require('./routes/my-shop');
const RequestController = require('./middlewares/RequestController');

//Instancia e inicialización de Express
const server = express();

//Pase de implementaciones a Express
server.use(cors());
server.use(express.json());
server.use('/user', RequestController, USER_ROUTES);
server.use('/auth', RequestController, AUTH_ROUTES);
server.use('/my-shop-data', RequestController, MYSHOP_ROUTES);

//Inicialización de servidor
server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en puerto ${process.env.PORT}`);
})