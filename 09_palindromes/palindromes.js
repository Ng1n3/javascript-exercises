const palindromes = function (word) {
    word = word.toLowerCase().replace(/[!.,\s]/g, '');
    let palin = word.split('').reverse().join('');

    return word === palin;
}

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
