const sum = (...req) => {
  let add = 0;
  let count = 0;
  const original = req.slice();
  req = req[0];
  if (!Array.isArray(req)) {
    req = original;
  }
  req.forEach((a) => {
    if (typeof a !== "string") {
      add += a;
      count++;
    }
  });

  return add / count;
};

module.exports = sum;
