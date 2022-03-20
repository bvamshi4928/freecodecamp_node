// Modules

// const names = require("./index");

// names.sayHi(names.peter);

// const data = require("./alternative-module export");

// console.log(data.items);

// require("./index");

const lodash = require("lodash");

const items = [1, [2, 3], 4, 5, 6, 7, 8, 9];

const newitems = lodash.flattenDeep(items);
console.log(newitems);