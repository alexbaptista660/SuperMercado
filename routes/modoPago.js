const express = require('express')
const ServiciosModoPago = require('../servicios/modoPagoServicios')
const servicios = new ServiciosModoPago()
const router = express.Router()

router.get('/mostrar', async (req, res) => {
    try{
        const modoPago = await servicios.listarModoPago()
        res.json(modoPago)
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
        const modoPago = await servicios.buscarModoPago(id)
        if(!modoPago){
            throw new Error('modo de Pago no encontrado')
        }
        res.json({
            id : id,
            modoPago : modoPago
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