const palindromes = function (str) {
    const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clean = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanum.includes(character))
        .join();

    const reverse = clean.split('').reverse().join('');

    return clean === reverse;

};

// Do not edit below this line
module.exports = palindromes;
