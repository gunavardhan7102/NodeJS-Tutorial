const customAPI = require('./custom-api')
const {StatusCodes} = require('http-status-codes')

class notFound extends customAPI{
    constructor(message){
        super(message)
        this.status = StatusCodes.NOT_FOUND
    }
}

module.exports = notFound