function logError(err,req,res, next){
    console.error(err)
    next(err)
}