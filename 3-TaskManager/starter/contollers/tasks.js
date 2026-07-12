
const Task = require('../models/tasks')


const getAllTasks = async (req,res) => {
    try{
const tasks = await Task.find({})
res.status(200).send(tasks)
    }
    catch(err){
        res.status(500).send(err)
    }
}

const createTask = async (req,res) => {
    try{
const task = await Task.create(req.body)
res.status(201).json(task)
    }
catch (err){
    res.status(500).json(err)   
}
}

const getTask = async (req,res) => {
try{
const task = await Task.findOne({_id:req.params.id}).exec()
if(task != null){
res.status(200).json(task)
}
else{
    res.status(404).json({'msg':`No Data found with ${req.params.id}`})
}
}
catch(err){
    res.status(500).json(err)
}
}

const updateTask = async (req,res) => {
    try{
const task = await Task.findOneAndUpdate({_id:req.params.id},req.body,{
    new: true,
    runValidators: true
})
res.status(200).json(task)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteTask = async (req,res) => {
try{
await Task.findByIdAndDelete(req.params.id)
res.status(200).json({'msg':'Deleted successfully'})
}
catch(err){
    res.status(500).json(err)
}
}


const editTask = async (req,res) => {
try{
const task = await Task.findByIdAndUpdate({_id:req.params.id},req.body,{
    new:true,
    runValidators:true
})
res.status(200).json(task)
}
catch(err){
    res.status(500).json(err)
}
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask, editTask}