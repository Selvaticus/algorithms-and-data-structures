function minSubArrayLen(numbers, limit) {
  let first_pointer = 0, second_pointer = 0, min_length = Infinity, rolling_sum = 0;

  rolling_sum = numbers[first_pointer];

  while (second_pointer < numbers.length) {
    if (second_pointer - first_pointer + 1 < min_length && rolling_sum >= limit) {
      min_length = second_pointer - first_pointer + 1;
    }

    if (rolling_sum >= limit) {

      while (first_pointer < second_pointer) {
        // Try to decrease the window and still be above limit
        rolling_sum = rolling_sum - numbers[first_pointer];
        first_pointer++;

        if (rolling_sum < limit) {
          // If you got below the limit stop shriking the window
          break;
        } else {
          // If not update the minimum length
          min_length = second_pointer - first_pointer + 1;
        }
      }
    }
    // Increase the window and rolling sum
    second_pointer++;
    rolling_sum = rolling_sum + numbers[second_pointer];
  }
  return min_length === Infinity ? 0 : min_length;
}

module.exports = minSubArrayLen;