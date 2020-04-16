const flatten = require('./flatten');

test('"[1, 2, 3, [4, 5]]" flattens to "[1, 2, 3, 4, 5]"', () => {
  expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test('"[1, [2, [3, 4], [[5]]]]" flattens to "[1, 2, 3, 4, 5]"', () => {
  expect(flatten([1, [2, [3, 4], [[5]]]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test('"[[1],[2],[3]]" flattens to "[1,2,3]"', () => {
  expect(flatten([[1], [2], [3]])).toStrictEqual([1, 2, 3]);
});

test('"[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]" flattens to "[1,2,3]"', () => {
  expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toStrictEqual([1, 2, 3]);
});

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3