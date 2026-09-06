const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

const {dashboard, login} = require('../controllers/main')


router.route('/dashboard').get(auth,dashboard)
router.post('/login', login)

module.exports = router