const express = require('express');
const app = express();
const data = require('./data')


app.use(express.static('./2-express-tutorial/method-public'))

app.use(express.urlencoded({extended:false})) // Parses the HTML form data

app.use(express.json())   //Parses the json data

app.post('/login',(req,res)=>{
   const {name} = req.body
    if(name){
       res.send(name)  
    }
    else{
    res.send("Please Enter the value")
    }  
})

app.post('/api/people',(req,res)=>{
      data.push(req.body)
     res.status(201).json(data)  
})

app.get('/api/people',(req,res)=>{
    res.json(data)
})


app.put('/api/people/:id',(req,res)=>{   
   let datafound = data.find((e)=>{   
    if(e.id == req.params.id){
    return e
    }
})
 if(datafound){
        const {name} = req.body
        console.log(name);
        datafound.name = name
        res.status(200).json([...data])
    }
    else
        res.send(`Invalid data`)  
})

app.delete('/del/:id',(req,res)=>{ 
const index = data.findIndex(f=>f.id === +(req.params.id))
data.splice(index,1)
res.json([...data])
})


app.listen(5000)