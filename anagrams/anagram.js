function anagram(string_one, string_two) {
  if (string_one === '' && string_two === '') {
    return true
  }

  return string_one.split('').sort().join() === string_two.split('').sort().join();
}

module.exports = anagram;