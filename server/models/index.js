const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hexfinderDB', (err) => {
  if (err) console.log(err);
  console.log('Connected to Database');
})

module.exports = mongoose