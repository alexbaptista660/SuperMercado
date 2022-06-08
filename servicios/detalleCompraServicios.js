const getConection = require('../libs/postgres')

class DetalleCompraServicios{

    constructor(){
        const servicios = []
    }

    async listarDetalleCompra(){
        const conexion = getConection()
        const detalle_compra = await (await conexion).query('Select * from public.detalle_compra')
        return detalle_compra.rows
    }

    async buscarDetalleCompra(id){
        const conexion = getConection()
        //const productos =  await (await conexion).query('Select * from public.productos')
        const detalle_compra = await (await conexion).query('Select * from public.detalle_compra where id_detalle_compra = ' + id)
        return detalle_compra.rows
    }

    crearProducto(body){

    }

    modificarProducto(id, body){

    }

    eliminarProducto(id){

    }

}

module.exports = DetalleCompraServicios