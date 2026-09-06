const CustomAPI = require('../errors/custom-api')
const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
if(err instanceof CustomAPI){
    return res.status(err.statusCode).json(err.message)
}
return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
}

module.exports = errorHandler