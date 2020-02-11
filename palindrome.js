// hannah,  bob, racecar
// justin
const isPalindrome = (userInput) => {
  const userInputArr = userInput.split('').reverse().join('').toString();

  return userInputArr === userInput;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("justin"));
