const jwt = require('jsonwebtoken')
const {unAuthenticated} = require('../errors/index')

const authMiddleware = (req,res,next) => {
     const authHeader = req.headers.authorization
     if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw unAuthenticated("Bearer token is required")
     }
    const clientToken = authHeader.split(" ")[1]
try {
    const decode = jwt.verify(clientToken, process.env.jwtSecret)
    req.user = decode.username
  
} catch (e) {
   throw unAuthenticated('Token not valid')
}
next()
}

module.exports = authMiddleware