const bubbleSort = require("./bubble_sort");

test("sort empty arrays", () => {
  // Arrange
  const items = []
  const expected = []

  // Act / Assert
  expect(bubbleSort(items)).toStrictEqual(expected);
})

test("sort 2 elem array", () => {
  // Arrange
  const items = [2, 1]
  const expected = [1, 2]

  // Act / Assert
  expect(bubbleSort(items)).toStrictEqual(expected);
})

test("sort other arrays", () => {
  // Arrange
  const items = [7, 1, 10, 5, 9, 8, 3, 6, 2, 4]
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Act / Assert
  expect(bubbleSort(items)).toStrictEqual(expected);
})