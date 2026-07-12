const mongoose = require('mongoose')


const connectdb = (url) => {
return mongoose.connect(url)
.then(()=>{console.log('Connected')})
.catch((err)=>console.log('Mongoose DB Failed',err))
}


module.exports = connectdb