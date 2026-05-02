#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const data = require('../data/silan/products.json');

console.log('Categories:');
data.categories.forEach((cat, i) => {
  console.log(`  ${i+1}. ${cat.name} - Products: ${cat.products ? cat.products.length : 0}`);
  if (cat.products) {
    cat.products.forEach((p, j) => {
      console.log(`     ${j+1}. ${p.partNumber}`);
    });
  }
});
