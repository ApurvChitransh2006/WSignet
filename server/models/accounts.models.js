const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
  firmCode: {
    type: String,
    required: true
  },
  accountName: {
    type: String
  },
  accountNo: {
    type: String
  },
}, {timestamps: true})

const Accounts = mongoose.model('Accounts', AccountSchema)
module.exports = Accounts