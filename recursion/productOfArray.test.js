const productOfArray = require('./productOfArray');

test('product of [1,2,3] is 6', () => {
  expect(productOfArray([1, 2, 3])).toBe(6);
})

test('product of [1,2,3,10] is 60', () => {
  expect(productOfArray([1, 2, 3, 10])).toBe(60);
})

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60