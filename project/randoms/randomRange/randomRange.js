const randomRange = (min = 0, max = 100) => {
  let res = min + Math.random() * (max + 1 - min);
  return Math.floor(res);
};

module.exports.randomRange = randomRange;
