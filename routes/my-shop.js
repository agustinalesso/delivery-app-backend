const express = require('express');
const { createShopData, updateShopData, getShopData } = require('../controllers/my-shop');

const MYSHOP_ROUTES = express.Router();

MYSHOP_ROUTES.route('/')
    .post(createShopData)
MYSHOP_ROUTES.route('/:uid')
    .get(getShopData)
    .put(updateShopData)

module.exports = MYSHOP_ROUTES;