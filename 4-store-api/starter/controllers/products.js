const Products = require('../models/products')


// console.log('Products Data', Products);


const getAllProductsStatic = async (req,res) => {
  const search = 'ab'
    const result = await Products.find({
        //  featured: true,
        // name: 'vase table'
        // name:{$regex:search, $options:'i'}
        price:{$lt:30},
        rating:{$lt:4}
    }).sort('name')
    // .select('name')
    // .limit(2)
     res.send(result).status(200)
}

const getAllProductsDynamic = async (req,res) => {
    //  const query = req.query['featured']
// const results = await products.find({
//      featured: query.featured
// })


const {featured, company, name, sort, fields, page=1, limit=10, numericFilter} = req.query
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
let results =  Products.find(queryObject)
 if(sort){
// queryObject = Products.sort();
const sortlist = sort.split(',').join(' ')
results = results.sort(sortlist)
 }
 if(fields){
   const fieldList = fields.split(',').join(' ')
   results = results.select(fieldList)
 }
const skip = (page-1)*limit
results = results.skip(skip).limit(limit) 

if(numericFilter){
const operatorMap = {
    '>=':'$gte',
    '<=':'$lte',
    '>':'$gt',
    '<':'$lt',
    '=':'$eq'
}
// const regEx = /(>=|<=|>|<|=)/g;
// let filters = numericFilter.replace(regEx,(match)=>`-${operatorMap[match]}-`)
let operator;
for(const op of Object.keys(operatorMap)){
    if(numericFilter.includes(op)){
        operator=op;
        break;
    }
}
console.log(operator);

 const [l,r] = numericFilter.split(operator)
 
results = results.find({
[l]:{[operatorMap[operator]]: +(r)}
 })
}

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



const newres = await results
//  results = results.sort()
res.send(newres).status(200)
}
 

module.exports = {getAllProductsStatic, getAllProductsDynamic}