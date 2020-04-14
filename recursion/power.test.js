const power = require('./power');

test('1 to the power of 1 is 1', () => {
  expect(power(1, 1)).toBe(1);
})

test('1 to the power of 2 is 1', () => {
  expect(power(1, 2)).toBe(1);
})

test('3 to the power of 2 is 9', () => {
  expect(power(3, 2)).toBe(9);
})

test('5 to the power of 2 is 25', () => {
  expect(power(5, 2)).toBe(25);
})