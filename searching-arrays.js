/*
const getUniqueValues = (arrOfNum) => {
  const set = new Set(arrOfNum);

  return [...set];
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]

const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
console.log(
    "Without destructuring",
  "Address 1: " + address[0],
  "Address 2: " + address[1],
  "Address 3: " + address[2]
);

const [address1, address2, address3] = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];
console.log(
  "With destructuring",
  "Address 1: " + address1,
  "Address 2: " + address2,
  "Address 3: " + address3
);

const arr = [
   [ {"c": 1},{"d": 2} ],
   [ {"c": 2},{"d": 3} ]
];

const simplifyArray = (arr = []) => {
   const res = [];
   arr.forEach(element => {
      element.forEach(el => {
         res.push(el);
      });
   });
   return res;
};
console.log(simplifyArray(arr));

const arrays = [[1, 2],[1, 22],[1, 32], [3, 4], [5, 6]];

const res = [].concat(...arrays).sort();

const resB = arrays.reduce((a,c) => a.concat(c).sort(), []);

const set = new Set(res);

console.log('res', res);
console.log('resB', resB);
console.log('set', set);
*/


let data = [
 {
  persons: ["Michaelangelo", "Leonardo", "Donatello", "Rafael"],
  enemies: ["Shredder", "Beebob", "Rocksteady"]
 },
 {
  persons: ["Luke Skywalker"],
  enemies: ["Darth Vader"]
 }
]

const flat = data.reduce((acc, item) => {
 item.persons.forEach(person => acc.push(person));
  item.enemies.forEach(person => acc.push(person));
  return acc
}, []);

console.log(flat)
