const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) { 
  return num1 - num2;
};

const sum = function(arr) {
  if (!arr || arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  let sum = 0;
  arr.forEach((num) => sum += num);
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach((num) => sum *= num);
  return sum;
};

const power = function(num1, num2) {
  let sum = 1;
	for(let i = 0; i < num2; i++) sum *= num1;
  return sum;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
  let sum = 1;
  for (let i = 1; i <= num; i++) sum *= i;
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
