class ServiciosClientes{
    constructor(){
        const cliente = []
    }
    async createCliente(edad){
        const mensaje = 'esta es la edad recibida en los servicios de cliente'
        return mensaje + ' ' + edad
    }
}

module.exports = ServiciosClientes