const MDB_Usuario = require('../models/user');

//Función para traer un usuario en particular
const user_getUser = async (req, res) => {
    try {

        const usuario = await MDB_Usuario.findOne( { google_uid: req.params.uid }, {_id: 0, _v: 0} );
        res.status(200).send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error: el servidor falló al intentar recuperar el usuario');
    }
}

//Función para traer todos los usuarios
const user_getAllUsers = async (req,res) => {
    try {
        res.send('Ok');
    } catch (error) {
        console.log(error);
    }
}

//Función para actualizar un usuario
const user_updateUser = async (req,res) => {
    try {
        
        const google_uid = req.params.uid;
        const body = req.body;
        delete body._id;
        delete body.__v;
        
        const query = body.imagen_perfil === null ? {$unset: {"imagen_perfil": 1, "imagen_nombreArchivo": 1} } : {}

        const usuarioActualizado = await MDB_Usuario.findOneAndUpdate({google_uid},body,{query});
        
        if(usuarioActualizado){
            const usuarioActualizado = await MDB_Usuario.findOne({google_uid},{_id:0,__v:0});
            res.status(200).send({
                status: 200,
                message: 'El usuario ha sido actualizado',
                usuarioActualizado
            });
        }else{
            res.status(500).send({
                status: 500,
                message: 'Ocurrió un error al intentar actualizar el usuario'
            })
        }


    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Error de servidor'
        })
    }
}

//Función para eliminar un usuario
const user_deleteUser = async (req,res) => {
    try {
        res.send('Ok');
    } catch (error) {
        console.log(error);
    }
}

//Exportaciones
module.exports = {
    user_getUser,
    user_getAllUsers,
    user_updateUser,
    user_deleteUser
}