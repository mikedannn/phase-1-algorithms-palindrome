function isPalindrome(word) {
  const reverseWord = word.split('').reverse().join('');
  return reverseWord === word;
}

/* 
  if word is the same forward as it is backward return true
  if word is anything else return false
*/

/*
  function isPalindrome() takes in a 'string'
  the function separates the letters in the string, reverses them, then joins them again
  if the reverseWord variable is the same as the original string it returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("batman"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sunshine"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
