const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create shoe Schema model
const ShoeSchema = new Schema({
  color: String,
  brand: String,
  size: Number,
  price: Number,
  in_stock: Number
});

const Shoes = mongoose.model('shoe', ShoeSchema);

var shoesStock = new Shoes({
  color: 'Red',
  brand: 'Mizuno',
  size: 9,
  price: 2500,
  in_stock: 20
});

shoesStock.save();

module.exports = Shoes;
