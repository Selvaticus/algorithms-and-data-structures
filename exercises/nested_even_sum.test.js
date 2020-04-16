const nestedEvenSum = require('./nested_even_sum');

test('With complex nested object', () => {
  // Arrange
  const complex_obj = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  // Act / Assert
  expect(nestedEvenSum(complex_obj)).toStrictEqual(6);
});

test('With simple nested object', () => {
  // Arrange
  const simple_obj = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
  };

  // Act / Assert
  expect(nestedEvenSum(simple_obj)).toStrictEqual(10);
});