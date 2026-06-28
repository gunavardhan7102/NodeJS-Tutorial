const express = require('express');
const app = express();
const data = require('./data')


app.use(express.static('./2-express-tutorial/method-public'))

app.use(express.urlencoded())

app.post('/login',(req,res)=>{
   const {name} = req.body
    if(name){
       res.send(name)  
    }
    else{
    res.send("Please Enter the value")
    }  
})

//07:12:12

app.get('/api/people',(req,res)=>{
    res.json(data)
})


app.listen(5000)