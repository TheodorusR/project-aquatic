const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  done: {
    type: Boolean,
    default: true
  }
});

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema)