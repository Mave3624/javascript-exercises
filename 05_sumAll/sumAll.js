const sumAll = function(number, addition) {
    let a;
    let i;
    let output = 0
    if (number > addition) {i = addition; a = number} else if (addition > number) {i = number; a = addition};
    if (number < 0 || addition < 0 || !Number.isInteger(number) || !Number.isInteger(addition)) return "ERROR";
    while (i <= a) {
        output += i
        i++
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
