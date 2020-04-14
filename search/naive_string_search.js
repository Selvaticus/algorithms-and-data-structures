function naiveStringSearch(string, search) {
  const search_size = search.length;
  let char_matches = 0;
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === search[0 + char_matches]) {
      char_matches++;
    } else {
      char_matches = 0;
    }
    if (char_matches === search_size) {
      count++;
      char_matches = 0;
    }
  }
  return count;
}

module.exports = naiveStringSearch