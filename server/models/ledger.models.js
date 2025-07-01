const mongoose = require('mongoose')

const LedgerSchema = new mongoose.Schema({
  firmCode: {
    type: String,
    required: true
  },
  vtype: {
    type: String
  },
  vdate: {
    type: Date
  },
  accountNo: {
    type: String
  },
  vmode: {
    type: String
  },
  vdis: {
    type: String
  },
  amount: {
    type: Number
  }
}, {timestamps: true})

const Ledger = mongoose.model('Ledger', LedgerSchema)
module.exports = Ledger