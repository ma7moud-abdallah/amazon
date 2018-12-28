const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name:{type: String , lowercase: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Çategory', categorySchema)