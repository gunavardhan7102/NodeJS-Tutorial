const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const auth = require('./routes/auth')
const jobs = require('./routes/jobs')
const connect = require('./db/connect')

app.use(express.json())

app.use('/api/v1/auth', auth)
app.use('/api/v1/jobs', jobs)

app.get('/',(req,res)=>{
  res.send('Jobs API')
})



const start = async() => {
    try {
     await connect(process.env.connectionString)
      app.listen(port,()=>{
        console.log(`Server is listening to ${port}`)
      })  
    } catch (error) {
        console.log(error)
    }
}

start()

app.use(notFound)
app.use(errorHandler)



















//06:55:00
