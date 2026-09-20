const CustomAPI = require('../errors/custom-api')
const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg:err.message || 'Something went wrong, please try again later'
    }
// if(err instanceof CustomAPI){
//     return res.status(err.statusCode).json(err.message)
// }
// return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err})
return res.status(customError.statusCode).json(customError.msg)
}

module.exports = errorHandler