const express = require('express')
const { clearConfigCache } = require('prettier')
const serviciosClientes = require('../servicios/serviciosClientes')

const router = express.Router()

const servicios = new serviciosClientes()
//con parametro opcional "edad", en la ruta se escribe "localhost:3100/clientes?edad=X"
router.get('/', async (req,res) => {
    try{
        const { edad } = req.query
        const cliente = await servicios.createCliente(edad)
        res.json(cliente)
    }
    catch(error){
        res.status(404).json({
            mensaje: error.message
        })
    }

    
})
// espera un parametro para funcionar
router.get('/:id', (req, res)=>{
    const id = req.params.id
    res.json({
        id : id
    })
})




module.exports = router