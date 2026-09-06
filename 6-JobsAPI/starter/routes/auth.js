const express = require('express')
const router = express.Router()
const {login, register} = require('../controllers/auth')

router.route('/').post(register).post(login)

module.exports = router
