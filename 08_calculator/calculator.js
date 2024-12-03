const add = function(a, b) {
	return a + b
};

const subtract = function(a, b ) {
	return a - b
};

const sum = function(value) {
return value.reduce((total, current) => {
    return total + current
  },0)
};

const multiply = function(value) {
  return value.reduce((a, b) => {
    return a * b
  })
};

const power = function(a, b) {
  return Math.pow(a, b)
}

const factorial = function(a) {
	 if (a === 0) return 1
   e = 1
   for (i = 1; i <= a; i++) {
     e *= i
   }
   return e
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
