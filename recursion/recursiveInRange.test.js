const recursiveInRange = require('./recursiveInRange');

test('sum up to 6 is 21', () => {
  expect(recursiveInRange(6)).toBe(21);
})

test('sum up to 10 is 55', () => {
  expect(recursiveInRange(10)).toBe(55);
})
