const factorial = require("./factorial")

test('factorial of 1 is 1', () => {
  expect(factorial(1)).toBe(1);
})

test('factorial of 2 is 2', () => {
  expect(factorial(2)).toBe(2);
})

test('factorial of 4 is 24', () => {
  expect(factorial(4)).toBe(24);
})

test('factorail of 7 is 5040', () => {
  expect(factorial(7)).toBe(5040);
})