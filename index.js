function isPalindrome(word) {
  let reverseWord = word.split("").reverse().join("")
  return word === reverseWord
}

/* 
//Declare variable 
//Split WORD into an array, reverse the order, and join again.
//Assign the value of the operation above to the variable I declared.
//Compare WORD and variable
*/

/*
It was a relatively simple operation.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("pip"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bottle"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
