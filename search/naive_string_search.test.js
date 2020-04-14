const naiveStringSearch = require("./naive_string_search.js");

test('finds once', () => {
  expect(naiveStringSearch("asdsadsaomgasdasdas", "omg")).toBe(1);
})

test('finds twice', () => {
  expect(naiveStringSearch("asdsadsaomgasdasdasomg", "omg")).toBe(2);
})

test('finds trice', () => {
  expect(naiveStringSearch("omgasdsadsaomgasdasdasomg", "omg")).toBe(3);
})

test('finds none', () => {
  expect(naiveStringSearch("omgasdsadsaomgasdasdasomg", "bla")).toBe(0);
})