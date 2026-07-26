const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
name:{
    type: String,
    required: [true, 'This field is required'],
    },
price:{
    type: Number,
    required: [true, 'This field is required']
},
featured:{
    type: Boolean,
    default: false
},
rating:{
    type:Number,
    default:4.5
},
createdAt:{
    type: Date,
    default: Date.now()
},
company:{
    type:String,
    // enum:['Ikea','Liddy','caressa','marcos']
    enum:{
        values:['ikea','liddy','caressa','marcos'],
        message: 'This value is not supported'
    }
}
})


module.exports = mongoose.model('Products', productSchema)