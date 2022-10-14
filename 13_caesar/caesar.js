const caesar = function(word, num) {
a.map((word)=> {
    let text = word
    let count = 0
    
    for(let i = 0; i<word.length; i++)
    {
        let code = text.charCodeAt(text[i]);
        count = count + num;

    }
})
};

caesar(A, 5);

// Do not edit below this line
module.exports = caesar;
