const caesar = (string, numb) => {
    return string
        .split('')
        .map(char => shiftChar(char, numb))
        .join('');
};

const codeSet = code => (code < 97 ? 65: 97)

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, numb) => {
    const code = char.charCodeAt();

    if((code >= 65 && code <= 90) || (code >=97 && code <= 122)) {
        return String.fromCharCode(mod(code + numb - codeSet(code), 26) + codeSet(code))
    }
    return char;
}





// Do not edit below this line
module.exports = caesar;
