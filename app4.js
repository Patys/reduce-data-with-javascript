function reducer(acc, val) {
  return acc + val;
}

var data = [1,2,3,4,5,56,6];
var sum = data.reduce(reducer,0);

console.log(sum / data.length);
