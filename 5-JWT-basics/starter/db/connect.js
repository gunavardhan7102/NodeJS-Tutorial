const mongoose = require('mongoose')

const connectdb = (url) => {
return mongoose.connect(url)
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(`Connection failed due to: ${err}`)})
}

module.exports = connectdb