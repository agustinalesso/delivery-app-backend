const express = require('express');
const MDB_Usuario = require('../models/user');
const MDB_MyShop = require('../models/shop');
const { default: mongoose } = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const createShopData = async (req,res) => {

    console.log(req.body);

    res.status(200).send({
        status: 200
    })
}
const updateShopData = async (req,res) => {

}
const getShopData = async (req,res) => {
    try {
        const google_uid = req.params.uid;
        const usuario = await MDB_Usuario.findOne({google_uid});
        if(usuario){
            console.log(usuario);
            const usuarioId = String(usuario._id);
            console.log(usuarioId);
            const myshop = await MDB_MyShop.findOne({owner: usuarioId}).populate('owner');
            console.log(myshop);
            if(myshop){
                res.status(200).send({
                    status: 200,
                    myshop
                })
            }else{
                res.status(200).send({
                    status: 200
                })
            }
        }else{
            res.status(404).send({
                status: 404,
                message: 'Usuario no encontrado'
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

module.exports = {
    createShopData,
    updateShopData,
    getShopData
}