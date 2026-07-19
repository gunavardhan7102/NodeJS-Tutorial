const createCustomError = require('../errors/custom-error')


const errorHandlerMiddleware = (err,req,res,next) => {
     res.status(err.statusCode).json(err.message)
}

module.exports = errorHandlerMiddleware