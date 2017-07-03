var data = [1,2,3,4];

var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
  return acc;
}, []);

console.log(doubled);
