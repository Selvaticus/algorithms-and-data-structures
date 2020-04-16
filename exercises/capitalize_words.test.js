const capitalizeWords = require('./capitalize_words');

test('With complex nested object', () => {
  // Arrange
  const words = ["i", "am", "learning", "recursion"];

  // Act / Assert
  expect(capitalizeWords(words)).toStrictEqual(["I", "AM", "LEARNING", "RECURSION"]);
});
