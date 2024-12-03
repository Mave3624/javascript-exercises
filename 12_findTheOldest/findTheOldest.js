const findTheOldest = function(Array) {
    Array.map((a) => {
        a.yearOfDeath ??= new Date().getUTCFullYear() 
        a.years = a.yearOfDeath - a.yearOfBirth}
    )
    Array.sort((a,b) => a.years > b.years ? -1: 1)
    return Array[0]
    };

// Do not edit below this line
module.exports = findTheOldest;
