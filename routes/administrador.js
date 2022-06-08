const express = require('express')
const router = express.Router()
const serviciosAdminstrador = require('../servicios/administradorServicios')
const servicios = new serviciosAdminstrador()

router.get('/mostrar', async (req, res) => {
    try{
        const administradores = await servicios.mostrarAdministradores()
        res.json(administradores)
    }
    catch(error){
        res.status(404).json({
            mensaje: error.message
        })
    }
})

router.get('/buscar/:id', async (req,res) =>{
    try{
        const id = req.params.id
        const administradores = await servicios.buscarAdministrador(id)
        res.json(administradores)
    }
    catch(error){
        res.status(404).json({
            mensaje: error.message
        })
    }
})

module.exports = router