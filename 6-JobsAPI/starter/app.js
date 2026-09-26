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
// const xss = require('xss')
const ratelimit = require('express-rate-limit')
const fs = require('fs')

const swaggerUi = require("swagger-ui-express")
const yaml = require("yaml")
const file = fs.readFileSync('./swagger.yaml','utf-8')
const swaggerdoc = yaml.parse(file)


app.use(express.json()) //To parse the json data
app.use(helmet()) // To add various security headers in the response headers.
app.use(cors())

// app.use(cors({
//     origin: 'https://yourfrontend.com'
// }));


// app.use(xss())
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




app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerdoc,{explorer:true}))
 //The explorer is to enable search


start()



app.use(notFound)
app.use(errorHandler)







//09:36:00

