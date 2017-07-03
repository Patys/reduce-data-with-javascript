function reducer(acc, val, index, array) {
  let intermediaryValue = acc + val;
  if(index === array.length-1) {
    return intermediaryValue / array.length;
  }
  return intermediaryValue;
}

var data = [1,2,3,4,5,56,6];
var avarge = data.reduce(reducer,0);

console.log(avarge);
