const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const tasks = require('./routes/tasks')
const connectdb = require('./db/connect')
require('dotenv').config()
const {notfound} = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware

app.use(express.static('./3-TaskManager/starter/public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.get('/home',(req,res)=>{
    res.send('Task Manager')
})
app.use(notfound)
app.use(errorHandlerMiddleware)

//routes

const start = async() => {
    try{
await connectdb(process.env.connectionString);
app.listen(port,console.log(`Listening to the server...${port}`))
    }
    catch(err){
console.log(err);
    }
}

//Project-2

start()





//MongoDB
//18981a0215_db_user
//mC3uD1KwytvsQVL8
