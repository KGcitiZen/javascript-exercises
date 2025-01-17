const convertToCelsius = function (tempInF) {
  return Number(((+tempInF - 32) / (9 / 5)).toFixed(1));
};

const convertToFahrenheit = function (tempInC) {
  return Number((+tempInC * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
