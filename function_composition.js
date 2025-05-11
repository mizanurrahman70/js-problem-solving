const square = x => x * x;
const double = x => x * 2;
const add5 = x => x + 5;

const composedFunction = x => add5(double(square(x)));

console.log(composedFunction(3)); // Output: 23
