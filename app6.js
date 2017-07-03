var data = [[1,2,3], [4,5,6], [7,8,9]];

var flattenedData = data.reduce((acc,val) => {
  return acc.concat(val);
}, []);

console.log(flattenedData);

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce((acc,val) => {
  val.cast.forEach((item) =>{
    if(acc.indexOf(item) === -1) {
      acc.push(item);
    }
  });
  return acc;
}, []);

console.log(stars);

var dataWithLetter = [1,2,3,"4"];

var dataWithLetterReduced = dataWithLetter.reduceRight((acc, val, index) => {
  console.log(index);
  return acc + val;
});

console.log(dataWithLetterReduced);
