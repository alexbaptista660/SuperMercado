function logError(err,req,res,next){
    console.error(err)
    next(err)
}

function errorHandler(err,req,res,next) {
    res.status(500).json({
        mensaje: err.message,
        stack: err.stack
    })
}

function boomError(err, req, res, next) {
    if(err.isBoom){
        const {output} = err
        res.status(output.statusCode).json(output.payload)
    }
    next(err)
}

module.exports = {logError,errorHandler,boomError}