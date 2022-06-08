const getConection = require('../libs/postgres')

class compraServicios{

    constructor(){
        const servicios = []
    }

    async listarCompra(){
        const conexion = getConection()
        const compra = await (await conexion).query('Select * from public.compra')
        return compra.rows
    }

    async buscarCompra(id){
        const conexion = getConection()
        //const productos =  await (await conexion).query('Select * from public.productos')
        const compra = await (await conexion).query('Select * from public.compra where id_compra = ' + id)
        return compra.rows
    }

    crearProducto(body){

    }

    modificarProducto(id, body){

    }

    eliminarProducto(id){

    }

}

module.exports = compraServicios