const maxSubArraySum = require('./max_sub_array_sum');

test('max sum of [100, 200, 300, 400] of size 2 is 700', () => {
  expect(maxSubArraySum([100, 200, 300, 400], 2)).toBe(700);
});

test('max sum of [1, 4, 2, 10, 23, 3, 1, 0, 20] of size 4 is 39', () => {
  expect(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test('max sum of [-3, 4, 0, -2, 6, -1] of size 2 is 5', () => {
  expect(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

test('max sum of [3, -2, 7, -4, 1, -1, 4, -2, 1] of size 2 is 5', () => {
  expect(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
});

test('max sum of [2, 3] of size 3 is null', () => {
  expect(maxSubArraySum([2, 3], 3)).toBe(null);
});