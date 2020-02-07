/*
    sort the following array of numbers without any built in
    functions, additional libraries, or frameworks
*/
var numbers = [12, 10, 15, 11, 14, 13, 16];

const sortNumbers = (numbers) => {
  let currentNum = numbers[0];
  let sortedArr = [];
  
  for(let idx in numbers) {
    if(sortedArr.length < 1 || numbers[idx] > sortedArr[sortedArr.length - 1]) {
      sortedArr.push(numbers[idx]);
      continue;
    }
      for(let subIdx in numbers) {
        let smallerFlag = (numbers[idx] <= sortedArr[subIdx]);
        if (smallerFlag) {
          sortedArr.splice(subIdx, 0, numbers[idx])
          break;
        }
      }
  }
  console.log(sortedArr);
}

sortNumbers(numbers);
