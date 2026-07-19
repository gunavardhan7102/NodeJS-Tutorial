
const Task = require('../models/tasks')
const {asyncWrapper} = require('../middleware/not-found')
const createCustomError = require('../errors/custom-error')


const getAllTasks = asyncWrapper (async (req,res) => {          
const tasks = await Task.find({})
res.status(200).send(tasks)   
})

const createTask = asyncWrapper(async (req,res) => {
const task = await Task.create(req.body)
res.status(201).json(task)
})

const getTask = async (req,res, next) => {
try{
const task = await Task.findOne({_id:req.params.id}).exec()
if(task != null){
res.status(200).json(task)
}
else{
    // const error = new Error(`No Data found with ${req.params.id}`)
    // error.status = 404;
    // next(error);
    // res.status(404).json({'msg':`No Data found with ${req.params.id}`})
   next(createCustomError(`No Data found with ${req.params.id}`,404));
    
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