const clientes = require('./clientes')
const productos = require('./producto')
const adminstrador = require('./administrador')
const categoria = require('./categoria')
const modoPago = require('./modoPago')
const tarjetas = require('./tarjeta')
const compra = require('./compras')
const detalle_compra = require('./detalleCompra')
const swaggerIU = require('swagger-ui-express')
const express = require('express')


function routerApi(app){

    const swaggerDoc = require('../swagger.json')
    app.use('/api-docs', swaggerIU.serve, swaggerIU.setup(swaggerDoc))
    app.use('/clientes', clientes),
    app.use('/productos', productos),
    app.use('/administrador', adminstrador),
    app.use('/categoria',categoria),
    app.use('/modoPago', modoPago),
    app.use('/tarjeta', tarjetas),
    app.use('/compra', compra),
    app.use('/detalle_compra', detalle_compra)
}

//exportamos la funcion de rutas "routerApi"
module.exports = routerApi


