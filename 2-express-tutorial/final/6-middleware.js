const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
const app = express();

app.use([logger, authorize])
app.use(morgan('tiny'))


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

app.get('/middleware', [logger,authorize], (req,res)=>{
    console.log('Second Hey');
    res.send('Hey').status(200)
})



app.listen(5000,()=>{
    console.log('Running')
})


