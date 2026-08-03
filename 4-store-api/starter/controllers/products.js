const products = require('../models/products');
const Products = require('../models/products')


// console.log('Products Data', Products);


const getAllProductsStatic = async (req,res) => {
  const search = 'ab'
    const result = await Products.find({
        //  featured: true,
        // name: 'vase table'
        // name:{$regex:search, $options:'i'}
    }).sort('name')
     res.send(result).status(200)
}

const getAllProductsDynamic = async (req,res) => {
    //  const query = req.query['featured']
// const results = await products.find({
//      featured: query.featured
// })


const {featured, company, name, sort} = req.query
const queryObject = {}
if(featured){
queryObject.featured = featured
}
if(company){
queryObject.company = company
}
if(name){
queryObject.name = {$regex:name, $options:'i'}
}

if(sort){

}

console.log(queryObject);


// const allowedKeys = Object.keys(Products.schema.paths);

// const queryKeys = Object.keys(req.query);

// const invalidKeys = queryKeys.filter(
//   key => !allowedKeys.includes(key)
// );

// if (invalidKeys.length) {
//   return res.status(400).json({
//     message: `Invalid query parameter(s): ${invalidKeys.join(", ")}`
//   });
// }



let results = await products.find(queryObject)
results = results.sort('name')
res.send(results).status(200)
}
 

module.exports = {getAllProductsStatic, getAllProductsDynamic}