const express = require('express')
const logger = require('./logger')
const app = express();

app.use('/api',(req,res,next)=>{
console.log('Guna');
next();
})


app.get('/',(req,res)=>{
    console.log(req.method);
   res.send('Hello')
})


app.get('/api/test',(req,res)=>{
res.send('New Hello')
})


app.get('/oldmethod', logger, (req,res)=>{
    console.log('Second Hey');
    res.send('Hey')
})


app.listen(5000,()=>{
    console.log('Running')
})