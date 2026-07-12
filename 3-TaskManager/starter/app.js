const express = require('express');
const app = express();
const port = 3000
const tasks = require('./routes/tasks')
const connectdb = require('./db/connect')
require('dotenv').config()

//middleware

app.use(express.static('./3-TaskManager/starter/public'))
app.use(express.json())

//routes

const start = async() => {
    try{
await connectdb(process.env.connectionString);
app.listen(port,console.log('Listening to the server...'))
    }
    catch(err){
console.log(err);
    }
}

//02:26:00

start()

app.use('/api/v1/tasks',tasks)

app.get('/home',(req,res)=>{
    res.send('Task Manager')
})




//MongoDB
//18981a0215_db_user
//mC3uD1KwytvsQVL8
