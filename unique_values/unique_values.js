function uniqueValues(values) {
  let p1 = 0;
  let p2 = 0;

  let count = 0;

  while (p2 <= values.length) {
    if (values[p2] !== values[p1]) {
      p1 = p2;
      count++;
    }
    p2++;
  }

  return count;
}

module.exports = uniqueValues