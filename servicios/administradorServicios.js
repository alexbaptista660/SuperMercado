const getConection = require('../libs/postgres')

class ServiciosAdministrador{

    async mostrarAdministradores(){

        const conexion = getConection()
        const administradores = await (await conexion).query('Select * from public.administrador')
        return administradores.rows
    }

    async buscarAdministrador(id){
        const conexion = getConection()
        //const productos =  await (await conexion).query('Select * from public.productos')
        const administradores = await (await conexion).query('Select * from public.administrador where id_admin = ' + id)
        return administradores.rows
    }

}

module.exports = ServiciosAdministrador