function capitalizeWords(words) {
  if (words.length === 0) {
    return [];
  }
  const first_word = words[0].toUpperCase();
  return [first_word].concat(capitalizeWords(words.slice(1)));
}

module.exports = capitalizeWords;