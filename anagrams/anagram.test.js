const anagram = require('./anagram');

test('empty string should return true', () => {
  expect(anagram('', '')).toBe(true);
})

test('aaz and zza should return false', () => {
  expect(anagram('aaz', 'zza')).toBe(false);
})

test('anagram and nagaram should return true', () => {
  expect(anagram('anagram', 'nagaram')).toBe(true);
})

test('rat and car should return false', () => {
  expect(anagram('rat', 'car')).toBe(false);
})

test('awesome and awesom should return false', () => {
  expect(anagram('awesome', 'awesom')).toBe(false);
})

test('qwerty and qeywrt should return true', () => {
  expect(anagram('qwerty', 'qeywrt')).toBe(true);
})

test('texttwisttime and timetwisttext should return true', () => {
  expect(anagram('texttwisttime', 'timetwisttext')).toBe(true);
})