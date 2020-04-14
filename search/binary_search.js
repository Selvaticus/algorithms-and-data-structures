function binarySearch(values, search) {
  let right = 0;
  let left = (values.length - 1);
  const calcMidpoint = (left, right) => Math.ceil((left + right) / 2);

  while (right < left) {
    let midpoint = calcMidpoint(left, right);
    let midpointValue = values[midpoint];

    if (midpointValue === search) {
      return midpoint;
    }

    if (midpointValue > search) {
      left = midpoint;
    } else {
      right = midpoint;
    }
  }

  return -1;
}


module.exports = binarySearch