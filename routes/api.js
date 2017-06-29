const express = require('express');
const mongoose = require('mongoose');
const Shoes = require('../models/shoes');
const stock = require('../models/shoeStock');
const findBrand = require('../controllers/filterByBrand');
const findSize = require('../controllers/filterBySize');
const findByBrand_Size = require('../controllers/filterByBrandAndSize');
const router = express.Router();

//GET request for all the shoes in the database
router.get('/shoes', function(req, res, next) {
  Shoes.find({}).then(function(result){
    res.json(result[0].stock);
  });
});

//GET request for specific shoe brand in the database
router.get('/shoes/brand/:brand', function(req, res, next) {
  const brand = req.params.brand;
  res.json(findBrand(brand));
});

//GET request for specific shoe size in the database
router.get('/shoes/size/:size', function(req, res, next) {
  const size = req.params.size;
  res.json(findSize(Number(size)));
});

//GET request for specific size and brand in the database
router.get('/shoes/size/:size/brand/:brand', function(req, res, next) {
  const brand = req.params.brand;
  const size = req.params.size;
  res.json(findByBrand_Size(brand, size));
});

// POST request to add more shoes to the stock
router.post('/shoes', function(req, res, next) {
  const newItem = req.body;

  // drop databas before adding new stock
  mongoose.connection.collections.shoes.drop();
  stock.push(newItem);
  var newStock = new Shoes({
    stock
  });
  newStock.save().then(function(){
    res.json(stock);
  });

  // POST request for when a shoe is sold
  router.post('/shoes/sold/:id', function(req, res, next) {
    const delShoe = req.params.id;
    res.send({
      sold: delShoe
    });
  });

});

module.exports = router;
