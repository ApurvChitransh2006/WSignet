const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  firmCode: {
    type: String,
    required: true
  },
  productName: String,
  mfgName: String,
  salesRate: {
    type: Number,
    required: true
  },
  dharaRate: {
    type: Number,
    required: true
  },
  superRate: {
    type: Number,
    required: true
  },
}, {timestamps: true})

const Product = mongoose.model('Products', ProductSchema)
module.exports = Product