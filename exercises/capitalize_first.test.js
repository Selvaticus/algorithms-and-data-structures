const capitalizeFirst = require('./capitalize_first');

test('["car","taco","banana"] becomes "["Car","Taco","Banana"]"', () => {
  expect(capitalizeFirst(["car", "taco", "banana"])).toStrictEqual(["Car", "Taco", "Banana"]);
});
