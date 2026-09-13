const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const unauthenticated = require('../errors/unauthenticated')

const auth = async(req,res,next) => {
const authorization = req.headers.authorization
if(!authorization || !authorization.startsWith('Bearer ')){
        console.log('Failing')
throw new unauthenticated('Authentication Invalid')
}
const token =  authorization.split(' ')[1]
try{
const payload =  jwt.verify(token,process.env.jwtSecret)
}
catch(e){
// throw new unauthenticated(e)
res.json({e})
}
next()
}

module.exports = auth