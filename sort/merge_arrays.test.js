const mergeArrays = require("./merge_arrays");

test("merge 2 empty arrays", () => {
  // Arrange
  const array_one = []
  const array_two = []
  const expected = []

  // Act / Assert
  expect(mergeArrays(array_one, array_two)).toStrictEqual(expected);
})

test("merge 2 arrays of same lenght", () => {
  // Arrange
  const array_one = [1, 3, 5, 7, 9]
  const array_two = [2, 4, 6, 8, 10]
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Act / Assert
  expect(mergeArrays(array_one, array_two)).toStrictEqual(expected);
})

test("merge 2 arrays of different length", () => {
  // Arrange
  const array_one = [1, 3, 5, 7, 9];
  const array_two = [2, 4, 6, 8];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Act / Assert
  expect(mergeArrays(array_one, array_two)).toStrictEqual(expected);
})

test("merge 2 arrays where one is empty", () => {
  // Arrange
  const array_one = [];
  const array_two = [2, 4, 6, 8];
  const expected = [2, 4, 6, 8];

  // Act / Assert
  expect(mergeArrays(array_one, array_two)).toStrictEqual(expected);
})

test("sort 2 arrays with one element", () => {
  // Arrange
  const array_one = [2]
  const array_two = [1]
  const expected = [1, 2]

  // Act / Assert
  expect(mergeArrays(array_one, array_two)).toStrictEqual(expected);
})