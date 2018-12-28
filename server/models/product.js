const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref: 'categories'},
    owner: {type: Schema.Types.ObjectId, ref: 'user'}, 
    price: Number,
    name: String,
    createdAt: {type: Date, default: Date.now},
    image: String,
    description: String

})

module.exports = mongoose.model('Product', productSchema)
