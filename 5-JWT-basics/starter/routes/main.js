const express = require('express')
const router = express.Router()

const {dashboard, login} = require('../controllers/main')


router.route('/dashboard').get(dashboard)
router.post('/login', login)

module.exports = router