var data = [1,2,3,4];

var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
  return acc;
}, []);

var doubledMapped = data.map(function(item) {
  return item * 2;
});

console.log(doubledMapped);
