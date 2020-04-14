function isSubsequence(string_one, string_two) {
  let first_pointer = 0, second_pointer = 0;

  // iterate until we reach the end of one of the strings
  while (first_pointer < string_one.length && second_pointer < string_two.length) {
    if (string_one[first_pointer] === string_two[second_pointer]) {
      first_pointer++;
      second_pointer++;
    } else {
      second_pointer++;
    }
  }

  // If we reached the end of the first string than we matched all its elements
  if (first_pointer > string_one.length - 1) {
    return true;
  }

  return false;
}

module.exports = isSubsequence;