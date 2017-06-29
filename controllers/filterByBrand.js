'use strict';
const stock = require('../models/shoeStock');

module.exports = function findBrand(brand) {
  const filterBrand = [];
  for (let i = 0; i < stock.length; i++) {
    let curItem = stock[i];
    if (brand === curItem.brand) {
      filterBrand.push(curItem);
    }
  }
  return filterBrand;
}
