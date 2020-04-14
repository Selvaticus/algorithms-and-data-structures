const minSubArrayLen = require('./min_sub_array_len');

test('min length of sub array from [2, 3, 1, 2, 4, 3] with sum equal or greater than 7 is 2', () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
});

test('min length of sub array from [2, 1, 6, 5, 4] with sum equal or greater than 9 is 2', () => {
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
});

test('min length of sub array from [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19] with sum equal or greater than 52 is 1', () => {
  expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
});

test('min length of sub array from [1, 4, 16, 22, 5, 7, 8, 9, 10] with sum equal or greater than 39 is 3', () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
});

test('min length of sub array from [1, 4, 16, 22, 5, 7, 8, 9, 10] with sum equal or greater than 55 is 5', () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
});

test('min length of sub array from [4, 3, 3, 8, 1, 2, 3] with sum equal or greater than 11 is 2', () => {
  expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
});

test('min length of sub array from [1, 4, 16, 22, 5, 7, 8, 9, 10] with sum equal or greater than 95 is 0', () => {
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
});