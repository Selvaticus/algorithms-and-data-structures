const stringifyNumbers = require("./stringify_numbers");

test('Given a object with nested properties corretly stringify all numbers', () => {
  // Arrange
  const obj = {
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66
      }
    }
  }

  const expected = {
    num: "1",
    test: [],
    data: {
      val: "4",
      info: {
        isRight: true,
        random: "66"
      }
    }
  }

  // Act / Assert
  expect(stringifyNumbers(obj)).toStrictEqual(expected);
})