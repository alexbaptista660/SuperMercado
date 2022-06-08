const joi = require('joi')

const id = joi.string().uuid()
const nombre = joi.string().min(3).max(30)
const paterno = joi.string().min(3).max(30)
const materno = joi.string().min(3).max(30)
const genero = joi.string().min(3).max(30)
const fecha_nacimiento = joi.string().min(3).max(30)
const correo = joi.string().min(3).max(30)
const contraseña = joi.string().min(3).max(30)
const telefono = joi.string().min(3).max(30)

const agregarClienteSchema = joi.object({
    nombre : nombre.required(),
    paterno : paterno.required(),
    materno : materno.required(),
    genero : genero.required(),
    fecha_nacimiento : fecha_nacimiento.required(),
    correo : correo.required(),
    contraseña : contraseña.required(),
    telefono : telefono.required()
})

module.exports = {
    agregarClienteSchema
}