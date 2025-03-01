const convertToCelsius = function(degree) {
  let ans = (degree - 32) * 5 / 9; 
  return + ans.toFixed(1);
};

const convertToFahrenheit = function(degree) {
  let ans = (degree * 9 / 5) + 32;
  return + ans.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
