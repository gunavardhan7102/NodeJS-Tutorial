const CustomAPIError = require('../errors/custom-error')



const login = async(req,res) => {
    const {username, password} = req.body
       if(!username || !password){
      throw  CustomAPIError('Credentials are required', 400)
    }
    else
res.send('Login/Register/SignUp')
}

const dashboard = async(req,res) => {
    const randomNumber = Math.floor(Math.random()*100)
res.status(200).send(`Hello Bruce. Your lucky number is ${randomNumber}`)
}

module.exports = {login, dashboard}