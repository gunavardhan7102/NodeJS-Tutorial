const express = require('express')
const app = express();

app.get('/',(req,res)=>{
res.send('Hola')
})

app.get('/about',(req,res)=>{
res.send('About')
})

app.all('*guna',(req,res)=>{
res
.status(404)
.send('No resource found')
})

app.listen(5000,()=>{
    console.log('npm running on 5000');
    })