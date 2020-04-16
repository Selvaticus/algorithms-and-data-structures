const any = require('./any');

const isOdd = val => val % 2 !== 0;
const biggerThanTen = val => val > 10;

test('[1,2,3,4] has odd numbers', () => {
  expect(any([1, 2, 3, 4], isOdd)).toStrictEqual(false);
});

test('[4,6,8,9] has odd numbers', () => {
  expect(any([4, 6, 8, 9], isOdd)).toStrictEqual(true);
});

test('[4,6,8] doesnt have odd numbers', () => {
  expect(any([4, 6, 8], isOdd)).toStrictEqual(false);
});

test('[4,6,8] doesnt have numbers bigger than 10', () => {
  expect(any([4, 6, 8], biggerThanTen)).toStrictEqual(false);
});