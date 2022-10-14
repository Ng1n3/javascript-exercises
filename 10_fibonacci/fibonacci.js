const fibonacci = function(fib) {
    let counterA0 = 0;
    let counterA1 = 1;
    var counter;
    if(fib == 0)
    {
        counter = 1;
    }else if(fib < 0)
    {
        counter = 'ERROR';
    }else
    for(let i = 0; i < fib.length; i++)
    {
         counter = counterA0 + counterA1;
    }
    return counter;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
