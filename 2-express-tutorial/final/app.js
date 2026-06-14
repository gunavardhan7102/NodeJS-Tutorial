const express = require('express');
const app = express();
const data = require('./data')




app.get('/data',(req,res)=>{
    res.json(data)
})

//06:49:04
app.listen(5000)