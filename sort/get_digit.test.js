const getDigit = require("./get_digit");

const NUMBER = 7323;

test("get the position 0", () => {
  // Arrange
  const expected = 3

  // Act / Assert
  expect(getDigit(NUMBER, 0)).toStrictEqual(expected);
})

test("get the position 1", () => {
  // Arrange
  const expected = 2

  // Act / Assert
  expect(getDigit(NUMBER, 1)).toStrictEqual(expected);
})

test("get the position 2", () => {
  // Arrange
  const expected = 3

  // Act / Assert
  expect(getDigit(NUMBER, 2)).toStrictEqual(expected);
})

test("get the position 3", () => {
  // Arrange
  const expected = 7

  // Act / Assert
  expect(getDigit(NUMBER, 3)).toStrictEqual(expected);
})

test("get the position 5", () => {
  // Arrange
  const expected = 0

  // Act / Assert
  expect(getDigit(NUMBER, 5)).toStrictEqual(expected);
})