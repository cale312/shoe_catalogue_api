const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create shoe Schema model
const ShoeSchema = new Schema({
    id: Number,
    brand: String,
    color: String,
    size: Number,
    price: Number,
    in_stock: Number
});

const Shoes = mongoose.model("shoe", ShoeSchema);

module.exports = Shoes;
