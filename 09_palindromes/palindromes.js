const palindromes = function (string) {
    let alphanumerical = 'qwertyuioplkjhgfdsazxcvbnm1234567890'
    string = string.toLowerCase()
    let a = string.split("").filter((a) => alphanumerical.includes(a))
    let b = a.join('')
    let c = a.reverse().join('')
    return  b === c
};


// Do not edit below this line
module.exports = palindromes;
