const products = require('../models/products');
const Products = require('../models/products')


// console.log('Products Data', Products);


const getAllProductsStatic = async (req,res) => {
    const result = await Products.find({
         featured: true,
        name: 'vase table'
    })
     res.send(result).status(200)
}

const getAllProductsDynamic = async (req,res) => {
    //  const query = req.query['featured']
// const results = await products.find({
//      featured: query.featured
// })


const allowedKeys = Object.keys(Products.schema.paths);

const queryKeys = Object.keys(req.query);

const invalidKeys = queryKeys.filter(
  key => !allowedKeys.includes(key)
);

if (invalidKeys.length) {
  return res.status(400).json({
    message: `Invalid query parameter(s): ${invalidKeys.join(", ")}`
  });
}



const results = await products.find(req.query)
res.send(results).status(200)
}
 

module.exports = {getAllProductsStatic, getAllProductsDynamic}