const express = require('express')
const ServiciosCompra = require('../servicios/compraServicios')

const servicios = new ServiciosCompra()
const router = express.Router()

router.get('/mostrar', async (req, res) => {
    try{
        const compra = await servicios.listarCompra()
        res.json(compra)
    }
    catch(error){
        res.status(404).json({
            mensaje: error.message
        })
    }

}) 

//buscar un producto
router.get('/buscar/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const producto = await servicios.buscarCompra(id)
        if(!producto){
            throw new Error('Producto no encontrado')
        }
        res.json({
            id : id,
            producto : producto
        })
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
})

//crear un producto
router.post('/crear')

//modificar un producto
router.put('/modificar')

//eliminar un prodcuto
router.delete('eliminar')

module.exports = router