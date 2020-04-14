const same = require('./same');

test('empty list return true', () => {
  expect(same([], [])).toBe(true);
});

test('list of different sizes return false', () => {
  expect(same([1], [1, 2])).toBe(false)
});

test('list with the correct squares return true', () => {
  const result = same([1, 2, 3], [1, 4, 9])
  expect(result).toBe(true)
})

test('list with correct squares but wrong frequencies return false', () => {
  const result = same([1, 1, 2], [1, 4, 4])
  expect(result).toBe(false)
})

test('list with correct squares on wrong order still returns true', () => {
  const result = same([1, 2, 1], [4, 1, 1])
  expect(result).toBe(true)
})