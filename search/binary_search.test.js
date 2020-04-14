const binarySearch = require("./binary_search")

test("expect 1", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1) // 1
})

test("expect 2", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2) // 2
})

test("expect 4", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4) // 4
})

test("expect -1", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1) // -1
})

test("expect 2", () => {
  expect(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10)).toBe(2) // 2
})

test("expect 16", () => {
  expect(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95)).toBe(16) // 16
})

test("expect -1", () => {
  expect(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100)).toBe(-1) // -1
})
