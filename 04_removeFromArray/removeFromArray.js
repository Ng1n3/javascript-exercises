const removeFromArray = function(myArray, number) {
    let a = [];
    for (let i = 0; i < myArray.length; i++)
    {
        if (myArray[i] == number - 1)
        {
            a = myArray.splice(myArray[i], 1);
        }
    }
    return myArray;
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
