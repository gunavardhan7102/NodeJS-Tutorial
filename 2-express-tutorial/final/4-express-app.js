const express = require('express')
const path = require('path')
const app = express();

app.listen(5000,()=>{
    console.log('Listening');
    })

 app.use(express.static('./2-express-tutorial/navbar-app'))
 console.log(__dirname);
 


app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./2-express-tutorial/navbar-app/index.html'))

})



app.all('*heyyy',(req,res)=>{
res.send('Resource not found').status(404)
})