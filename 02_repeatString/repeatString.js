const repeatString = function(text, number) {
    if (number < 0) return "ERROR";
    let run = '';
    for (i = 1; i <= number; i++) {
        run += text;
    }
    return run
};

// Do not edit below this line
module.exports = repeatString;
