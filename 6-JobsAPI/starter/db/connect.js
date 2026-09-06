const mongoose = require('mongoose')

const connectDB = (url) => {
return mongoose.connect(url)
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(`DB connection failed due to ${err}`)})
}

module.exports = connectDB
