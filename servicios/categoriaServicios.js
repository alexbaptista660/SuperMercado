const getConection = require('../libs/postgres')

class CategoriaServicios {

    async listarCategoria(){
        const conexion = getConection()
        const productos = await (await conexion).query('Select * from public.categoria')
        return productos.rows
    }

    async buscarCategoria(id){
        const conexion = getConection()
        //const productos =  await (await conexion).query('Select * from public.productos')
        const productos = await (await conexion).query('Select * from public.categoria where id_categoria = ' + id)
        return productos.rows
    }

}

module.exports = CategoriaServicios