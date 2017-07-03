var data = [1,2,3,4];

var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
  return acc;
}, []);

var doubledMapped = data.map(function(item) {
  return item * 2;
});

console.log(doubledMapped);

//////////

var data2 = [1,2,3,3,4,4,5,6,7,8];

var evens = data2.reduce(function(acc, value) {
  if(value%2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

var evensFiltered = data2.filter(function(item) {
  return (item%2 === 0);
});

console.log(evensFiltered);

///////////

var filteredAndMapped =
  data2
    .filter((item) => (item%2===0))
    .map((item) => item*2);

console.log(filteredAndMapped);

var bigData = [];
for(let i = 0; i < 100000; i++) {
  bigData[i] = i;
}

console.time('bigdataFM');
var fmBigData = bigData
  .filter((item)=> (item%2===0))
  .map((item)=> (item*2));
console.timeEnd('bigdataFM');

console.time('bigdata');
var reducedBigData = bigData.reduce((acc, val) => {
  if(val % 2 === 0)
    acc.push(val*2);
  return acc;
},[]);
console.timeEnd('bigdata');
