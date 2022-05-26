const clientes = require('./clientes')
const productos = require('./producto')
const express = require('express')


function routerApi(app){

    //cuando se acceda a la ruta 'clientes' se redireccionara a la constante "clientes"
    app.use('/clientes', clientes),
    app.use('/productos', productos)
}

//exportamos la funcion de rutas "routerApi"
module.exports = routerApi

//nombre prueba