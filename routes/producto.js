const express = require('express')
const { route } = require('express/lib/application')
const ServiciosProducto = require('../servicios/productoServicios')

const servicios = new ServiciosProducto()

const router = express.Router()

router.get('/', (req, res) => {
    const respuestaProducto = servicios.listarProductos()
    res.json(respuestaProducto)
}) 

//buscar un producto
router.get('/buscar', (req, res) =>{
    
})

//crear un producto
router.post('/crear')

//modificar un producto
router.put('/modificar')

//eliminar un prodcuto
router.delete('eliminar')

module.exports = router