const notfound = (req,res) => {
    res.send('Resource not found').status(404)
}

const asyncWrapper = (fn) => {
return async (req,res,next) => {
    try{
await fn(req,res,next)
    }
    catch(err){
       next(err) 
    }
}
}

module.exports = {notfound, asyncWrapper}