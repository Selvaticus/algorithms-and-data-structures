const reverse = require('./reverse')

function isPalindrome(string) {
  const reversed = reverse(string);

  return reversed === string
}

module.exports = isPalindrome;