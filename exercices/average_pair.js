function averagePair(numbers, target_average) {
  // if there are no numbers we can match the target average
  if (numbers.length === 0) {
    return false;
  }

  let first_pointer = 0, second_pointer = numbers.length - 1;

  while (first_pointer < second_pointer) {
    const candidate_average = ((numbers[first_pointer] + numbers[second_pointer]) / 2)

    // if the average of both numbers is the target, problem solved, we can stop iterating
    if (candidate_average === target_average) {
      return true;
    }

    if (candidate_average < target_average) {
      // if the candidate average is smaller than the target average
      // we need to increase it, by trying a bigger lower bound value
      first_pointer++;
    } else {
      // if the candidate average is bigger than the target average
      // we need to decrease it, by trying a smaller upper bound value
      second_pointer--;
    }
  }

  return false;
}

module.exports = averagePair;