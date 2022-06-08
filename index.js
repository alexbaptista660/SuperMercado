const express = require('express')
const routerApi = require('./routes/index')
const {logError,errorHandler, boomError}=require('./middlewares/error.handler')

const app = express()
const port = 3100

// permite recibir cuerpos json 
app.use(express.json())

app.get('/', (req, res) => { //refieriendo al "localhost:3100"
    res.send("hola mundo este es mi primer API")
})

routerApi(app)

app.use(logError)
app.use(errorHandler)
app.use(boomError)

app.listen(port, () => {
    console.log("El servidor se esta ejecutando")
})  

