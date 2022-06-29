//Importaciones
const mongoose = require('mongoose');

//exporto directamente la conexión a la DB establecida
module.exports = mongoose.connect(process.env.DB_URL,(resp) => {
    console.log(`Base de datos conectada => ${process.env.DB_URL}`);
});;