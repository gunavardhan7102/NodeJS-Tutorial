const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err,req,res,next) => {
    res.status(StatusCodes.NOT_FOUND).send(err.message)
}

module.exports = errorHandlerMiddleware