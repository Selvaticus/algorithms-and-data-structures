const isSubsequence = require('./is_subsequence');

test('"hello" is a subsequence of "hello world"', () => {
  expect(isSubsequence("hello", "hello world")).toBe(true);
});

test('"sing" is a subsequence of "sting"', () => {
  expect(isSubsequence("sing", "sting")).toBe(true);
})

test('"abc" is a subsequence of "abracadabra"', () => {
  expect(isSubsequence("abc", "abracadabra")).toBe(true);
})

test('"abc" is not a subsequence of "acb', () => {
  expect(isSubsequence("abc", "acb")).toBe(false);
})