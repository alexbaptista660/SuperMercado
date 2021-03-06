const express = require('express')
const { route } = require('express/lib/application')
const ServiciosProducto = require('../servicios/productoServicios')

const servicios = new ServiciosProducto()

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const productos = await servicios.listarProductos()
        res.json(productos)
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
        const producto = await servicios.buscarPrudcto(id)
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