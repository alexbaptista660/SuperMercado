

function validateHandler(schema, property) {
    return (req, res, next ) =>{
        const data = req[property]
        const {error} = schema.validate(data)
        if(error){
            next()
        }
        next()
    }
}

module.exports = validateHandler