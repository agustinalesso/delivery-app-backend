//Importaciones
const FIREBASE_ADMIN = require("firebase-admin");
const CREDENCIALES = require('../dsj-sdk-credentials.json');
const Modelo_Usuario = require('../models/user');

//Inicialización de FirebaseAdmin
FIREBASE_ADMIN.initializeApp( { credential: FIREBASE_ADMIN.credential.cert(CREDENCIALES) } );

//Función para registrar usuario
const auth_register = async (req,res) => {
    try {

        //Recupero el body del request
        const body_usuario = req.body;

        //Me guardo el password
        const password = body_usuario.password;

        //Elimino los campos de password del body
        delete body_usuario.password;
        delete body_usuario.passwordconf;

        //Aguardo respuesta de Firebase con creación de usuario
        const respuestaFirebase = await FIREBASE_ADMIN.auth().createUser({
            email: body_usuario.email,
            password: password,
            emailVerified: false,
            disabled: false
        })

        //Guardo en mis datos el uid devuelto por firebase
        body_usuario.google_uid = respuestaFirebase.uid;

        //Guardo en MongoDB el usuario con la referencia a Firebase
        const mongo_usuario = new Modelo_Usuario(body_usuario);
        await mongo_usuario.save();

        //Envío la respuesta
        res.send({
            status: 200,
            mongo_usuario
        })

    } catch (error) {
        //Recuero el error recibido y devuelvo el problema
        res.status(403).send({
            ...error.errorInfo
        })
    }
}

//Exportaciones
module.exports = {
    auth_register
}