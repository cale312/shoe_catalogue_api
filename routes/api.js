'use strict';

const express = require("express");
const mongoose = require("mongoose");
const Shoes = require("../models/shoes");
const router = express.Router();

// GET request for all the shoes in the database
// description: return all the shoes in the database
router.get("/shoes", function(req, res, next) {
    Shoes.find({}).then(function(result, err) {
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
    }).then(function(result, err) {
        if (err) {
            return next(err);
        } else {
            res.send(result);
        }
    });
});

// GET request for specific shoe size in the database
// description: return only for specified shoe size
router.get("/shoes/size/:size", function(req, res, next) {
    const size = req.params.size;
    Shoes.find({
        size: size
    }).then(function(result, err) {
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
    Shoes.find({}).then(function(result, err) {
        for (let i = 0; i < result.length; i++) {
            let curItem = result[i];
            if (err) {
                return next(err);
            }

            if (curItem.brand === brand && curItem.size === Number(size)) {
                res.json(curItem);
            }
        }
    });
});

// POST request to add more shoes to the stock
// description: add new shoe to the stock
router.post("/shoes", function(req, res, next) {
    const newItem = req.body;
    const newShoe = new Shoes(newItem);
    newShoe.save().then(function() {
        Shoes.find({}).then(function(result, err) {
            if (err) {
                return next(err);
            } else {
                res.json(result);
            }
        });
    });
});

// POST request for when a shoe is sold
// description: update the database by decrementing by ONE the sold shoe searched by ID
router.post("/shoes/sold/:id", function(req, res, next) {
    const soldShoe = req.params.id;
    Shoes.findOne({
        id: soldShoe
    }).then(function(result, err) {
        if (err) {
            return next(err);
        } else {
            Shoes.update({
                in_stock: Number(in_stock) - 1
            }).then(function(){
                Shoes.find({}).then(function(result, err){
                    if (err) {
                        return next(err)
                    } else {
                        res.json(result);
                    }
                });
            });
        }
    });
});

module.exports = router;
