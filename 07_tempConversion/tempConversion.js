const convertToCelsius = function(digree) {
  output = (digree - 32) * (5/9); 
  return Math.round(output * 10) / 10;
};

const convertToFahrenheit = function(digree) {
    output = ((digree * 1.8) + 32).toFixed(1);
    return Math.round(output * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
