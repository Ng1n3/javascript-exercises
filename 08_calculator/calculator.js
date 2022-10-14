const add = function(a, b) {
	// let a = 10;
  // let b = 10;
  let c = a + b;
  return c;
};

add(4, 5);

const subtract = function(a, b) {
	// let a = 20;
  // let b = 10;
  let c = a - b;
  return c;
};

subtract(20, 10);

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++)
  {
    sum = sum + array[i];
  }

  return sum;

};

sum([1,2,3]);

const multiply = function(array) {
  let sum = 1;
  for(let i = 0; i < array.length; i++)
  {
    sum = sum * array[i];
  }
  return sum;
};

multiply(4, 9);

const power = function(num1, num2) {
	let multiplication = 1;
  for (let i = 0; i < num2; i++)
  {
    multiplication = multiplication * num1;
  }
  return multiplication;
};

power(10, 2);

const factorial = function(a) {
  let factor = 1;
  if(a == 0)
  {
    factor = 1; 
  }else
	for(let i = a; i > 0; i--)
  {
    factor = factor * i
  }
  return factor
};

factorial(7);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
