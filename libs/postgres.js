const {Client} = require('pg')

async function getConection() {

    const clientes12 = new Client({
        host: '172.29.0.3',
        port: 5432,
        user: 'root',
        password: 'admin123',
        database: 'my_db'
    })

    await clientes12.connect()
    return clientes12
}

module.exports = getConection