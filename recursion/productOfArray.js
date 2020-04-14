function productOfArray(array) {
  if (array.length === 0) return 1;
  return array.pop() * productOfArray(array);
}

module.exports = productOfArray;