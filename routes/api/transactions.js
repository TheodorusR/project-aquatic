const express = require('express');
const router = express.Router();

// Transaction model
const Transaction = require('../../models/Transaction');

// @route   GET api/transactions
// @desc    Get All transactions
// @access  Public
router.get('/:id/', async (req, res) => {
  const transaction = await Transaction.find({_id: req.params.id})
    .sort({date: -1})
    .exec();
  res.json(...transaction);
})

// @route   GET api/transactions
// @desc    Get All transactions
// @access  Public
router.get('/', async (req, res) => {
  const transactions = await Transaction.find()
    .sort({date: -1})
    .exec();
  res.json(transactions);
})

// @route   POST api/transactions
// @desc    POST new transactions
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body);
  Transaction.create(req.body, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  });
});

// @route   DELETE api/transactions
// @desc    DELETE transactions
// @access  Public
router.delete('/', (req, res) => {
  Transaction.deleteMany().exec();
  res.send('Database cleaned');
})

// @route   PUT api/transactions
// @desc    update transaction by id
// @access  Public
router.put('/', (req, res) => {
  const id = req.body._id;
  Transaction.findByIdAndUpdate(id, req.body, {new: true}, (err, data) => {
    if (err) console.log(err);
    res.json(data);
  })
})

module.exports = router;