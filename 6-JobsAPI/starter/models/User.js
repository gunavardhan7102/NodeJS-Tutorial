const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'The name is required'],
        min:3,
        max:30
    },
    email:{
        type:String,
        required:[true, 'The email is required'],
       match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide valid email'],
       unique: true
    },
    password:{
        type:String,
        required:[true, 'The password is required'],
        min:6,
        max:12
    }
})



userSchema.pre('save',async function(){
// const salt = await bcrypt.genSalt(10)  It's not required because the salt is by default included in hash
this.password = await bcrypt.hash(this.password,10)
// next()  It's not required because the function is async
})


userSchema.methods.getName = function(){
    return this.name
}

userSchema.methods.createJWT = function(){
return jwt.sign({'id':this._id,'name':this.name},process.env.jwtSecret,{expiresIn:'30d'})
}

userSchema.methods.isMatch = function(enteredPwd){
return bcrypt.compare(enteredPwd, this.password)
}

module.exports = mongoose.model('User',userSchema)