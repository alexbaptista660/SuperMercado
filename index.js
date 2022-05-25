const express = require('express')
const routerApi = require('./routes/index')

const app = express()
const port = 3100

// permite recibir cuerpos json 
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hola mundo este es mi primer API")
})

routerApi(app)

app.listen(port, () => {
    console.log("El servidor se esta ejecutando")
})  

//prueba de github
//los integrantes deben agregar sus nombre
//
//INTEGRANTES
//- Alex Gary Baptista Fariñas
//- nombre de prueba