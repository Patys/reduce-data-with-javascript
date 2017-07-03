var data = ["vote1","vote2","vote2","vote3"];

function reducer(acc, val) {
  if(acc[val]) {
    acc[val] += 1;
  }
  else {
    acc[val] = 1;
  }
  // return acc;
}

var tally = data.reduce(reducer, {});
console.log(tally);
