const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const transactions = require('./routes/api/transactions');

const app = express();

// Setting middleware
app.use(cors());
app.use(bodyParser.json());

// Database configuration
const db = process.env.URI;

// Connect to Mongo
try {
  mongoose.connect(db, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('Database connected...')
} catch (err) {
  console.log(err);
}

// Use routes
app.use('/api/transactions', transactions);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('react-client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'react-client', 'build', 'index.html'));
  });
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}...` );
})