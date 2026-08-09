require('dotenv').config()
const express = require('express')
const app = express();
const errorhandler = require('./middleware/error-handler')
const {notfound} = require('./middleware/not-found')
const port = process.env.PORT || 3000
const db = require('./db/connect')
const routers = require('./routes/main')


app.use(express.static('./5-JWT-basics/starter/public'))
app.use(express.json())
app.use('/api/v1', routers)



const start = async () => {
    try{
await db(process.env.connectionString)
app.listen(port,console.log(`Server is running on ${port}`)
)
    }
    catch(err){
console.log(err);
    }
}

start()

app.use(notfound)
app.use(errorhandler)


//05:30:00

