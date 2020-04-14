function mergeArrays(array_one, array_two) {
  const new_array = []

  let i = 0, j = 0;

  while (i < array_one.length || j < array_two.length) {
    if (!array_one[i]) {
      new_array.push(array_two[j]);
      j++;
    } else if (!array_two[j]) {
      new_array.push(array_one[i]);
      i++;
    } else if (array_one[i] <= array_two[j]) {
      new_array.push(array_one[i]);
      i++;
    } else {
      new_array.push(array_two[j]);
      j++;
    }
  }
  return new_array;
}

module.exports = mergeArrays