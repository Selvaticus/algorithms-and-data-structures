const sameNumbers = require('./same_numbers');

test('128 and 281 return true', () => {
  expect(sameNumbers(128, 281)).toBe(true);
});

test('34 and 14 return false', () => {
  expect(sameNumbers(34, 14)).toBe(false);
})

test('3589578 and 5879385 return true', () => {
  const result = sameNumbers(3589578, 5879385);
  expect(result).toBe(true);
})

test('l22 and 222 return false', () => {
  const result = sameNumbers(22, 222);
  expect(result).toBe(false);
})