const express = require('express')
const router = express.Router();
const {getAllTasks, createTask, deleteTask, getTask, updateTask} = require('../contollers/tasks')

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask)

module.exports = router