const customAPI = require('./custom-api')
const {StatusCodes} = require('http-status-codes')

class unAuthenticated extends customAPI{
    constructor(message){
        super(message)
        this.status = StatusCodes.BAD_REQUEST
    }
}

module.exports = unAuthenticated