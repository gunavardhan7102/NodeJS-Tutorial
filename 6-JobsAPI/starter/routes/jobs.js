const express = require('express')
const router = express.Router()
const {getAllJobs, createJob, deleteJob, getJob, updateJob} = require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').delete(deleteJob).get(getJob).patch(updateJob)

module.exports = router
