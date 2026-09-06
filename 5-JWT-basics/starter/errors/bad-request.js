const custom_error = require('../errors/custom-error')
const {StatusCodes} = require('http-status-codes')

class BadRequest extends custom_error{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest