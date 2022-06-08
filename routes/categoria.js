const express = require('express')
const serviciosCategoria = require('../servicios/categoriaServicios')
const router = express.Router()
const servicios = new serviciosCategoria()

router.get('/mostrar', async (req, res) => {
    try{
        const categoria = await servicios.listarCategoria()
        res.json(categoria)
    }
    catch(error){
        res.status(404).json({
            mensaje: error.message
        })
    }

}) 

router.get('/buscar/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const categoria = await servicios.buscarCategoria(id)
        if(!categoria){
            throw new Error('Categoria no encontrada')
        }
        res.json({
            id : id,
            producto : categoria
        })
    } catch (error) {
        res.status(404).json({
            mensaje: error.message
        })
    }
})

module.exports = router