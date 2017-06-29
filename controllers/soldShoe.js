'use strict';
const shoes = require('../models/shoes');

module.exports = function soldShoe(id) {
  shoes.findOneAndUpdate({
    id: id
  }, {
    id: Number(id) - 1
  }).then(function(result) {
    
  });
}
