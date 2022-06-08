const express = require('express')
const router = express.Router()
const serviciosClientes = require('../servicios/serviciosClientes')
const servicios = new serviciosClientes()

// mostrar los clientes
router.get('/mostrar', async (req,res) => { 
    try{
        const clientes = await servicios.mostrarClientes()
        res.json(clientes)
    }
    catch(error){
        res.status(404).json({
            mensaje: error.message
        })
    }
})

//encontrar un cliente
router.get('/encontrar/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const cliente = await servicios.encontrarCliente(id)
        if(!cliente){
            throw new Error('Cliente no encontrado')
        }
        res.json({
            id : id,
            cliente : cliente
        })
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
})

//agregar clientes
router.post('/agregar', async (req, res) => {
    try {
        const body = req.body
        const clienteAgregado = await servicios.agregarClientes(body)
        res.json({
            mensaje: 'cliente Agregado',
            cliente: clienteAgregado
        })
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
})

//modificar clientes
router.patch('/modificar/:id', async (req, res, next) =>{
    try {
        const {id} = req.params
        const body = req.body
        const clienteModificado = await servicios.modificarClientes(id,body)
        res.json({
            mensaje: 'cliente modificado',
            id : id,
            body : clienteModificado
        })
    } catch (error) {
        next(error)
    }
})

//eliminar clientes
router.delete('/eliminar/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const clienteEliminado = await servicios.eliminarCliente(id)
        res.json(clienteEliminado)
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
})

module.exports = router