var data = [1,2,3,4];

function reducer(acc, val) {
  return acc + val;
}

var sum = data.reduce(reducer);
console.log(sum);
