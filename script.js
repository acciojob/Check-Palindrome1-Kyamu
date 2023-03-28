// complete the given function

function palindrome(s){

	 // get the total length of the words  
  s = s.toLowerCase();

  // Check if the string is the same forwards and backwards
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
		  
}
module.exports = palindrome
