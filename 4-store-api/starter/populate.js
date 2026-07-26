require('dotenv').config()
const connectdb = require('./db/connect')
const product = require('./models/products')
const productjson = require('./product.json')


const start = async() => {
try{
 await connectdb(process.env.connectionString)
 await product.deleteMany();
 await product.create(productjson)
console.log('Successfully connected');
process.exit(0)
}
catch(err){
console.log(err);
process.exit(1)
}
}

start()