const express = require('express');
const app = express();
const port = 3000
const tasks = require('./routes/tasks')

//middleware

app.use(express.json())
//21:45
//routes

app.use('/api/v1/home',tasks)

app.get('/home',(req,res)=>{
    res.send('Task Manager')
})

app.listen(port,console.log('Listening to the server...'))
