const express = require('express');
const app = express();

const payload = require('./data')

// app.use('*hghg',(req,res)=>{
// res.sendStatus(404).send('Resource not found')
// })

app.get('/',(req,res)=>{
    
  res.send('<h1>Home</h1> <br> <a href = "/api/products/1">Products</a>')
})

app.get('/api/products/:productID',(req,res)=>{
    //  console.log('Hi');
     console.log(`Parameters: ${req.params.productID}`);
   const data = payload.find(u=>(u.id) === +(req.params.productID))
    if(data != null){
        res.json(data).sendStatus(200)
     } else
         res.send('Resource not found').sendStatus(404)

})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    const newData = payload.find(v=>(v.id === +(req.params.productID) && v.id === +(req.params.reviewID)))
    if(newData != null){
        res.json(newData)
    }
    else
        res.send('No Resource')
})


app.get('/api/v1/query',(req,res)=>{
    const {search, limit}=req.query
    const tempData = [...payload]
    if(search != null){
res.send(tempData.filter(z=>z.name.startsWith(search)))
    }
    if(limit != null){
        res.send(payload.slice(0,+(limit)))
    }
    else
        res.send(tempData)
})

//06:03:00

app.listen(5000)