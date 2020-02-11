 /* 
  JavaScript – debug this program
*/
// count the number of “empty” (i.e. null or undefined) items in an array
function countEmpty(col) {
  var count = 0;
  for (var i = 0; i < col.length; i++) {
    var item = col[i];
    if (item == null) {
      count++;
    }
  };
  return count;
}

var items = [12, null, , 5, 32, 0, 144, null];
var count = countEmpty(items);

// expected result: 3
console.log("Expected: 3\nActual: " + count);
