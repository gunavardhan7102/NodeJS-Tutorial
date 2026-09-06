const { min } = require('lodash')
const mongoose = require('mongoose')

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

module.exports = mongoose.model('User',userSchema)