const getConection = require('../libs/postgres')

class ModoPagoServicios{

    constructor(){
        const servicios = []
    }

    async listarModoPago(){
        const conexion = getConection()
        const modoPago = await (await conexion).query('Select * from public.modo_pago')
        return modoPago.rows
    }

    async buscarModoPago(id){
        const conexion = getConection()
        //const productos =  await (await conexion).query('Select * from public.productos')
        const modoPago = await (await conexion).query('Select * from public.modo_pago where id_pago = ' + id)
        return modoPago.rows
    }

    crearProducto(body){

    }

    modificarProducto(id, body){

    }

    eliminarProducto(id){

    }

}

module.exports = ModoPagoServicios