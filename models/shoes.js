const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stock = require('./shoeStock');

// create shoe Schema model
const ShoeSchema = new Schema({
  stock: Array
});

const Shoes = mongoose.model('shoe', ShoeSchema);

var shoesStock = new Shoes({
  stock: stock
});

shoesStock.save();

module.exports = Shoes;
