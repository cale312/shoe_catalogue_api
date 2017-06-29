'use strict';
const stock = require('../models/shoeStock');

module.exports = function findBrandAndSize(brand, size) {
  const filteredItem = [];
  for (let i = 0; i < stock.length; i++) {
    let curItem = stock[i];
    if (brand === curItem.brand && Number(size) === curItem.size) {
      filteredItem.push(curItem);
    }
  }
  return filteredItem;
}
