const sum = require("./sum");

const random = require("./random");

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, "a"));
console.log(sum([1, 2, 3]));

console.log(random(1, 10));
console.log(random(10));
console.log(random(10, "b"));
