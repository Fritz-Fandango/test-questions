// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

var a = [1, -5, 0, 5, -2];
var b = [7, 0, 2, -2, 4];
var c = [-3, 4, 1, 7, 2, 0, -3];

// Add soltions to this array, solution should an array of numbers
// example: solutions = [[0, 0, 0], [-1, 0, 1], [-2, -2, 4], ...]
var solutions = []

const addArr = () => {
  // let addedArr = a.concat(b).concat(c)
  
  for(let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      var cfilter = c.filter(idx => idx === -1 * (a[i] + b[j]));
      
      // if(cfilter.length > 0) {
      //     solutions.push([a[i], b[j], cfilter.pop()]);
      // }        
      for(let k=0; k < cfilter.length; k++) {
          solutions.push([a[i], b[j], cfilter[k]]); 
      }
    }
  }
  
  return addArr
}

addArr();
console.log(solutions);
