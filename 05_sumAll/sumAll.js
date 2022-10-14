const sumAll = function(num1, num2) {
    let sum = 0;
//     const num1Check = Array.isArray(num1);
    const num2Check = Array.isArray(num2);

    if(num1 < 0 || num2 < 0 || typeof num2 === 'string' || num2Check)
    {
       return 'ERROR';
    }else if( num1 > num2)
    {
       for(let i = num2; i <= num1; i++)
       {
              sum = sum + i;
       }
    } else
    for(let i = num1; i <= num2; i++)
       {
              sum = sum + i;
       }
              return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
