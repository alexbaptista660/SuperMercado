const clientes = require('./clientes')
const express = require('express')


function routerApi(app){

    //cuando se acceda a la ruta 'clientes' se redireccionara a la constante "clientes"
    app.use('/clientes', clientes)
}

//exportamos la funcion de rutas "routerApi"
module.exports = routerApi

//nombre prueba