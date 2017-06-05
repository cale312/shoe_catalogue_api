const express = require('express');
const Shoes = require('../models/shoes');
const router = express.Router();

//GET request for all the shoes in the database
router.get('/shoes', function(req, res, next) {
  Shoes.find({}).then(function(shoes) {
    res.send(shoes);
  });
});

//GET request for specific shoe brand in the database
router.get('/shoes/brand/:brand', function(req, res, next) {
  const brand = req.params.brand;
  Shoes.find({
    brand: brand
  }).then(function(shoe) {
    res.send(shoe);
  });
});

//GET request for specific shoe size in the database
router.get('/shoes/size/:size', function(req, res, next) {
  const size = req.params.size;
  Shoes.find({
    size: size
  }).then(function(size){
    res.send(size);
  });
});

//GET request for specific size and brand in the database
router.get('/shoes/size/:size/brand/:brand', function(req, res, next) {
  const brand = req.params.brand;
  const size = req.params.size;

});






module.exports = router;
