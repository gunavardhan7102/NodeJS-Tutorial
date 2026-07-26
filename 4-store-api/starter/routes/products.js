const express = require('express')
const router = express.Router()
const {getAllProductsStatic, getAllProductsDynamic} = require('../controllers/products')



 router.get('/dynamic',getAllProductsDynamic)
router.route('/').get(getAllProductsStatic)


module.exports = router