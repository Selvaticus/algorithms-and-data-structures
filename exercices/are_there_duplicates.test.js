const areThereDuplciates = require('./are_there_duplicates');

test('with three different arguments', () => {
  expect(areThereDuplciates(1, 2, 3)).toBe(false);
});

test('with three arguments two duplciates', () => {
  expect(areThereDuplciates(1, 2, 2)).toBe(true);
});

test('with four arguments two duplicates', () => {
  expect(areThereDuplciates('a', 'b', 'c', 'a')).toBe(true);
})