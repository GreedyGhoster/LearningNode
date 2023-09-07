const { randomRange } = require("../randomRange");

const arrayByRandom = (len = 10) => {
  let arr = [];
  for (let i = 0; i < len; i++) arr.push(randomRange(1, 10));
  return arr;
};

module.exports.arrayByRandom = arrayByRandom;
