const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {badrequest,unAuthenticated} = require('../errors')
require('dotenv').config()

const register = async(req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
throw new badrequest('Please provide all the details')
    }
const response = await User.create({...req.body})
const token = response.createJWT()
res.status(StatusCodes.CREATED).json({'name':response.getName(),'token':token})
}

const login = async(req,res) => {
const{email,password} = req.body
if(!email || !password){
    throw new Error('Please provide valid username and password')
}
const loggedinUser = await User.findOne({email})
if(!loggedinUser){
    throw new unAuthenticated('User does not exists')
}
const isMatchPwd = await loggedinUser.isMatch(password)
if(!isMatchPwd){
    throw new unAuthenticated('Incorrect Password')
}
const loggedinToken = await loggedinUser.createJWT()
res.status(StatusCodes.OK).json({loggedinToken})
}

module.exports={register, login}