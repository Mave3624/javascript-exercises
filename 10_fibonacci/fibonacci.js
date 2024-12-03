const fibonacci = function(number) {
    let initial = [1,1]
    number = Number(number)
    if (number < 0) return "OOPS"
    if (number === 0) return 0

    for (a = 2; a < number; a++) {
        let fibonacci = initial[(initial.length - 1)] + initial[(initial.length - 2)]
        initial.push(fibonacci)
    }
    
    return initial[initial.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
