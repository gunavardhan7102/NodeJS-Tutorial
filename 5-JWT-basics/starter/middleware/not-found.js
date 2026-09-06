const {StatusCodes} = require('http-status-codes')

const notfound = (req,res) => {
    res.send('Resource not found').status(StatusCodes.NOT_FOUND)
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