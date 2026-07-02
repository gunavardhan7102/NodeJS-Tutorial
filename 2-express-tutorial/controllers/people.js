const data = require('../final/data')

const getPeople = (req,res)=>{
    res.json(data)
}

const addPeople = (req,res)=>{
      data.push(req.body)
     res.status(201).json(data)  
}

module.exports = {getPeople, addPeople}