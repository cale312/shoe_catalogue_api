'use strict';

const express = require("express");
const mongoose = require("mongoose");
const Shoes = require("../models/shoes");
const router = express.Router();

// GET request for all the shoes in the database
// description: return all the shoes in the database
router.get("/shoes", function(req, res, next) {
  Shoes.find({}).then(function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
});

// GET request for specific shoe brand in the database
// description: return only for a specified shoe brand
router.get("/shoes/brand/:brand", function(req, res, next) {
  const brand = req.params.brand;
  Shoes.find({
    brand: brand
  }).then(function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
});

// GET request for specific shoe size in the database
// description: return only for specified shoe size
router.get("/shoes/size/:size", function(req, res, next) {
  const size = req.params.size;
  Shoes.find({
    size: size
  }).then(function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
});

// GET request for specific size and brand in the database
// description: return only for specified shoe size and brand
router.get("/shoes/brand/:brand/size/:size", function(req, res, next) {
  const brand = req.params.brand;
  const size = req.params.size;
  Shoes.find({
    brand: brand,
    size: size
  }).then(function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
});

// POST request to add more shoes to the stock
// description: add new shoe to the stock
router.post("/shoes", function(req, res, next) {
  const newItem = req.body;
  const newShoe = new Shoes(newItem);
  newShoe.save().then(function() {
    Shoes.find({}).then(function(err, result) {
      if (err) {
        return next(err);
      } else {
        res.json(result);
      }
    });
  });
});

// DELETE request for when a shoe is sold
// description: update the database by decrementing by ONE the sold shoe searched by ID
router.post("/shoes/sold/brand/:brand/size/:size", function(req, res, next) {
  const brand = req.params.brand;
  const size = req.params.size;
  Shoes.findOneAndUpdate({
    brand: brand,
    size: size
  }, {
    $inc: {
      in_stock: -1
    }
  }).then(function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
