const express = require('express')
const path = require('path')
const app = express();

app.listen(5000,()=>{
    console.log('Listening');
    })

// app.use()
//05:08:35

app.get('/',(req,res)=>{
    res.sendFile(path.resolve('C:/Users/Dell/Downloads/NodeJS-Tutorial/2-express-tutorial/navbar-app/index.html'))

})



app.all('*heyyy',(req,res)=>{
res.send('Resource not found').status(404)
})