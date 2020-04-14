const averagePair = require('./average_pair');

test('empty list of integers', () => {
  expect(averagePair([], 4)).toBe(false);
});

test('small list with matched target average', () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
})

test('long list with mateched target average', () => {
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
})

test('list with negative values and no mateched target average', () => {
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
})