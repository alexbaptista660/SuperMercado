const getConection = require('../libs/postgres')

class productosServicios{

    constructor(){
        const servicios = []
    }

    async listarProductos(){
        const conexion = getConection()
        const productos = await (await conexion).query('Select * from public.productos')
        return productos.rows
    }

    async buscarPrudcto(id){
        const conexion = getConection()
        //const productos =  await (await conexion).query('Select * from public.productos')
        const productos = await (await conexion).query('Select * from public.productos where id_producto = ' + id)
        return productos.rows
    }

    crearProducto(body){

    }

    modificarProducto(id, body){

    }

    eliminarProducto(id){

    }

}

module.exports = productosServicios