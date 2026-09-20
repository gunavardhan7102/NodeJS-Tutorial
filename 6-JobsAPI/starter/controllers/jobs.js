const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')


const getAllJobs = async(req,res) => {
const Jobslist = await Job.find({createdBy:req.user.userId}).sort('createdAtssss')
res.status(StatusCodes.OK).json({Jobslist})
}

const getJob = async(req,res) => {
    const {id} = req.params
const oneJob  = await Job.findOne({_id:id, createdBy:req.user.userId})
res.status(StatusCodes.OK).json({oneJob})
}

const createJob = async(req,res) => {
    req.body.createdBy = req.user.userId
const newjob = await Job.create(req.body)
res.status(StatusCodes.CREATED).json({newjob})
}

const updateJob = async(req,res) => {
    const {id} = req.params
    const{company, position} = req.body
    if(company === '' || position === ''){
        throw new Error('Company and Position are required')
    }
const oldJob = await Job.findOneAndUpdate({_id:id, createdBy:req.user.userId},req.body,{
    new:true,
    runValidators: true
})
if(!oldJob){
    throw new Error('Job does not exists')
}
res.status(StatusCodes.OK).json({oldJob})
}

const deleteJob = async(req,res) => {
    const {id} = req.params
 await Job.findOneAndDelete({_id:id, createdBy:req.user.userId})
res.status(StatusCodes.OK).send('Deleted Succesfully')
}



module.exports={getAllJobs, getJob, createJob, updateJob, deleteJob}