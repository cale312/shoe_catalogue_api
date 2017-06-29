'use strict';
const stock = require('../models/shoeStock');

module.exports = function findSize(size) {
  const filterSize = [];
  for (let i = 0; i < stock.length; i++) {
    let curItem = stock[i];
    if (Number(size) === curItem.size) {
      filterSize.push(curItem);
    }
  }
  return filterSize;
}
