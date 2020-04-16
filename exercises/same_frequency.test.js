const sameFrequency = require('./same_frequency');

test('128 and 281 return true', () => {
  expect(sameFrequency(128, 281)).toBe(true);
});

test('34 and 14 return false', () => {
  expect(sameFrequency(34, 14)).toBe(false);
})

test('3589578 and 5879385 return true', () => {
  const result = sameFrequency(3589578, 5879385);
  expect(result).toBe(true);
})

test('l22 and 222 return false', () => {
  const result = sameFrequency(22, 222);
  expect(result).toBe(false);
})