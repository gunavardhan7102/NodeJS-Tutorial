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

const updateJob = (req,res) => {
res.send('Update Job')
}

const deleteJob = (req,res) => {
res.send('Delete Job')
}



module.exports={getAllJobs, getJob, createJob, updateJob, deleteJob}