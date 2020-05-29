const random = (...req) => {
  let max;
  let min = 0;
  if (req.length == 1) {
    max = req[0];
  } else {
    min = req[0];
    max = req[1];
  }
  let flag = req.find((e) => {
    return typeof e === "string";
  });

  if (flag) {
    return -1;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

module.exports = random;
