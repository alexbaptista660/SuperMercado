const express = require('express')
const ServiciosTarjeta = require('../servicios/tarjetaServicios')

const servicios = new ServiciosTarjeta()

const router = express.Router()

router.get('/mostrar', async (req, res) => {
    try{
        const tarjeta = await servicios.listarTarjetas()
        res.json(tarjeta)
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
        const tarjeta = await servicios.buscarTarjeta(id)
        if(!tarjeta){
            throw new Error('Producto no encontrado')
        }
        res.json({
            id : id,
            tarjeta : tarjeta
        })
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
})

module.exports = router