require('dotenv').config()
const express = require('express')
const app = express();
const errorhandler = require('./middleware/error-handler')
const {notfound} = require('./middleware/not-found')
const port = process.env.PORT || 3000
const db = require('./db/connect')
// const products = require('./controllers/products')
const route = require('./routes/products')

app.use(express.json())
app.use('/api/v1/products',route)

app.get('/',(req,res)=>{
res.send('<h1>Store API</h1>')
})

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


//04:10:00

