const repeatString = function(words, numberOfTimes) {
    let a = '';
    if(numberOfTimes < 0)
    {
        return 'ERROR';
    }else if(numberOfTimes == 0)
    {
        return '';
    }else
    for(let i = 0; i < numberOfTimes ; i++)
    {
    a += words;    
    }
    return a;
    
};
repeatString('hey', 3);


// Do not edit below this line
module.exports = repeatString;
