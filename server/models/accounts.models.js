const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
  firmCode: {
    type: String,
    required: true
  },
  accountName: String,
  accountNo: String,
  balance: String,
  balMode: String,
  area: String
}, {timestamps: true})

const Accounts = mongoose.model('Accounts', AccountSchema)
module.exports = Accounts