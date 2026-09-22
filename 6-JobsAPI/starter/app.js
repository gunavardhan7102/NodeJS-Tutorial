const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()
const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const auth = require('./routes/auth')
const jobs = require('./routes/jobs')
const connect = require('./db/connect')
const authmiddle = require('./middleware/authentication')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss')
const ratelimit = require('express-rate-limit')

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())
app.use(ratelimit({
  windowMs: 15 * 60 * 1000,
  limit: 15,
  message: "Too many requests"
}))

app.use('/api/v1/auth', auth)
app.use('/api/v1/jobs', authmiddle,jobs)

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



















//09:25:00

