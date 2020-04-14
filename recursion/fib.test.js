const fib = require('./fib');

test('4th fib number is 3', () => {
  expect(fib(4)).toBe(3);
});

test('10th fib number is 55', () => {
  expect(fib(10)).toBe(55);
});

test('28th fib number is 317811', () => {
  expect(fib(28)).toBe(317811);
});

test('35th fib number is 9227465', () => {
  expect(fib(35)).toBe(9227465);
});

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465