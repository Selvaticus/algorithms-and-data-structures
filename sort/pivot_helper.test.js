const pivotHelper = require("./pivot_helper");

test("pivot 2 element array", () => {
  // Arrange
  const items = [2, 1]
  const expected_items = [1, 2]

  // Act / Assert
  expect(pivotHelper(items)).toStrictEqual(1);
  expect(items).toStrictEqual(expected_items);
})

test("pivot 10 element array", () => {
  // Arrange
  const items = [7, 1, 10, 5, 9, 8, 3, 6, 2, 4]
  const expected_items = [4, 1, 5, 3, 6, 2, 7, 9, 8, 10]

  // Act / Assert
  expect(pivotHelper(items)).toStrictEqual(6);
  expect(items).toStrictEqual(expected_items);
})

test("pivot complex array", () => {
  // Arrange
  const items = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]
  const expected_items = [18, 4, 11, 16, 1, 14, 28, 41, 36, 37, 42, 40]

  // Act / Assert
  expect(pivotHelper(items)).toStrictEqual(6);
  expect(items).toStrictEqual(expected_items);
})