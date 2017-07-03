function increment(input) { return input + 1; }
function decrement(input) { return input - 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

let initialValue = 1;

var pipeline = [
  increment,
  increment,
  double,
  decrement,
  halve,
  decrement,
  double
]

var finalValue = pipeline.reduce((acc, fn) => {
  return fn(acc);
}, initialValue);

console.log(finalValue);
