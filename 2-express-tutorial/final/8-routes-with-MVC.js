const express = require('express');
const app = express();
const data = require('./data')
const people = require('../routes/people')
const login = require('../routes/auth')

app.use(express.static('./2-express-tutorial/method-public'))

app.use(express.urlencoded({extended:false})) // Parses the HTML form data

app.use(express.json())   //Parses the json data

app.use('/api/people', people)

app.use('/login', login)

app.listen(5000)