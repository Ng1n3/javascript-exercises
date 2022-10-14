const ftoc = function(value) {
  let conversion = (value - 32) * (5/9)
  let finalValue = Math.round(conversion * 10) / 10;
  return finalValue;
};

ftoc(30);

const ctof = function(value) {
  let conversion = value * (9/5) + 32;
  let finalValue = Math.round(conversion * 10) / 10;
  return finalValue;
};

ctof(30);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

