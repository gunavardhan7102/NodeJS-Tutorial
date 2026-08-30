const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')


const login = async(req,res) => {
    const {username, password} = req.body
       if(!username || !password){
      throw  CustomAPIError('Credentials are required', 400)
    }

const id = new Date().getDate()
const token = jwt.sign({id,username},process.env.jwtSecret,{expiresIn:'30d'})
res.status(200).json({msg:'user created',token})  
}

const dashboard = async(req,res) => {
const randomNumber = Math.floor(Math.random()*100)
res.status(200).send(`Hello Bruce. Your lucky number is ${randomNumber}`)
}

module.exports = {login, dashboard}