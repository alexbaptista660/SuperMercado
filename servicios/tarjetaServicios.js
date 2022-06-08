const getConection = require('../libs/postgres')

class TarjetaServicios{

    constructor(){
        const servicios = []
    }

    async listarTarjetas(){
        const conexion = getConection()
        const productos = await (await conexion).query('Select * from public.tarjeta')
        return productos.rows
    }

    async buscarTarjeta(id){
        const conexion = getConection()
        //const productos =  await (await conexion).query('Select * from public.productos')
        const productos = await (await conexion).query('Select * from public.tarjeta where id_tarjeta = ' + id)
        return productos.rows
    }

    

}

module.exports = TarjetaServicios