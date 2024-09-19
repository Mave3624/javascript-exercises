const removeFromArray = function(InputArray, ...number) {
    let Array = [];
    InputArray.forEach((value) => {
       if (!number.includes(value)) {
           Array.push(value);
        }
    })
    return Array
};

// Do not edit below this line
module.exports = removeFromArray;
