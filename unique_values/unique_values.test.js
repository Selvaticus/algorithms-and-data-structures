const uniqueValues = require('./unique_values');

test('when all are unique return correct value', () => {
  expect(uniqueValues([1, 2, 3, 4])).toBe(4);
})

test('when array is empty should return 0', () => {
  expect(uniqueValues([])).toBe(0);
})

test('when all but 2 are duplicates returns 2', () => {
  expect(uniqueValues([1, 1, 1, 1, 1, 1, 3])).toBe(2);
})

test('when the array has one element return 1', () => {
  expect(uniqueValues([1])).toBe(1);
})