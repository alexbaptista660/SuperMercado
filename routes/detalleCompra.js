const express = require('express')
const ServiciosDetalleCompra = require('../servicios/detalleCompraServicios')

const servicios = new ServiciosDetalleCompra()
const router = express.Router()

router.get('/mostrar', async (req, res) => {
    try{
        const detalle_compra = await servicios.listarDetalleCompra()
        res.json(detalle_compra)
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
        const detalle_compra = await servicios.buscarDetalleCompra(id)
        if(!detalle_compra){
            throw new Error('Producto no encontrado')
        }
        res.json({
            id : id,
            detalle_compra : detalle_compra
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