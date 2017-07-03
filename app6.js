var data = [[1,2,3], [4,5,6], [7,8,9]];

var flattenedData = data.reduce((acc,val) => {
  return acc.concat(val);
}, []);

console.log(flattenedData);
