const express = require('express')
const router = express.Router();

router.post('/',(req,res)=>{
   const {name} = req.body
    if(name){
       res.send(name)  
    }
    else{
    res.send("Please Enter the value")
    }  
})


module.exports = router