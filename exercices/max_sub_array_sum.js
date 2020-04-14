function maxSubArraySum(array, size) {
  // Can't have a sub array bigger than the array
  if (size > array.length) {
    return null;
  }
  let first_pointer = 0, second_pointer = size - 1, rolling_sum = 0;

  // calculate first *size* elemnts sum
  for (let index = 0; index <= second_pointer; index++) {
    rolling_sum += array[index];
  }

  let max_sum = rolling_sum;

  while (second_pointer < array.length - 1) {
    // subtract the departing element of the window from the rolling sum
    rolling_sum = rolling_sum - array[first_pointer];
    first_pointer++;
    second_pointer++;
    // add the arriving element of the windown into the rolling sum
    rolling_sum = rolling_sum + array[second_pointer];

    // check if we have a new max
    if (rolling_sum > max_sum) {
      max_sum = rolling_sum;
    }
  }

  return max_sum;
}

module.exports = maxSubArraySum;