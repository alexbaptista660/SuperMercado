const faker = require('faker')
const getConection = require('../libs/postgres')

class ServiciosClientes{

    constructor(){
        this.clientes=[]
        this.generarClientes()
    }

    async mostrarClientes(){
        //return this.clientes
        const conexion = getConection()
        const clientes = await (await conexion).query('Select * from public.clientes')
        return clientes.rows
    }

    async encontrarCliente(id){
        /*const cliente = this.clientes.find(item => item.id === id)
        if(cliente === -1){
            throw new Error('Cliente no encontrado')
        }
        return cliente*/
        const conexion = getConection()
        const clientes = await (await conexion).query('Select * from public.clientes where id_cliente = ' + id)
        return clientes.rows
    }


    async generarClientes(){
        for (let index = 0; index < 20; index ++){
            this.clientes.push({
                id: faker.datatype.uuid(),
                nombre: faker.name.firstName(),
                paterno: faker.name.lastName(),
                materno: faker.name.lastName(),
                genero: faker.random.arrayElement(['femenino','masculino']),
                fecha_nacimiento: faker.date.past(),
                correo: faker.internet.email(),
                contraseña: faker.internet.password(),
                telefono: faker.phone.phoneNumber()
            })
        }
    }


    async agregarClientes(data){
       /* const newCliente ={
            ...data
        }
        console.log(newCliente.contraseña)
        //this.clientes.push(newCliente)
        //return newCliente
        const conexion = getConection()
        const resultado = await conexion.query('insert into clientes (ci, nombre, paterno, materno, genero, fecha_nacimiento, correo, contraseña, telefono) values (?,?,?,?,?,?,?,?,?)', newCliente)
        return resultado*/
    }

    async modificarClientes(id,data){
        const index = this.clientes.findIndex(item => item.id === id)
        if(index === -1){
            throw new Error('Cliente no encontrado')
        }
        const cliente123 = this.clientes[index]
        this.clientes[index]={
            ...cliente123,
            ...data
        }
        return this.clientes[index]
    }

    async eliminarCliente(id){
        const index = this.clientes.findIndex(item => item.id === id)
        if(index === -1){
            throw new Error('Cliente no encontrado')
        }
        this.clientes.splice(index,1)
        return {
            mensaje: 'Cliente eliminado',
            id
        }
    }

} 

module.exports = ServiciosClientes



/*

con conexion a la base de datos

const getConnection = require('../libs/conexion')


//encontrar estudiante
asyn find(){
    const conexion = getConnection()
    const clientes = await conexion.query('Select * from public.clientes')
    return clientes.rows
}

//


*/