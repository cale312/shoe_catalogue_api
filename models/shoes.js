const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create shoe Schema model
const ShoeSchema = new Schema({
  id: Number,
  color: String,
  brand: String,
  price: Number,
  in_stock Number
});

const Shoe = mongoose.model('shoe', ShoeSchema);

module.exports(Shoe);
