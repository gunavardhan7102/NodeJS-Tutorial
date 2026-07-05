const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://18981a0215_db_user:mC3uD1KwytvsQVL8@nodeexpressproject.swwarz9.mongodb.net/'

const connectdb = () => {
return mongoose.connect(connectionString)
.then(console.log('Connected'))
.catch((err)=>console.log(err))
}


module.exports = connectdb