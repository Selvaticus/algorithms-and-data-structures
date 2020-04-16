function sameFrequency(number_one, number_two) {
  number_one_str = number_one.toString();
  number_two_str = number_two.toString();

  const first_sorted = number_one_str.split('').sort().join();
  const second_sorted = number_two_str.split('').sort().join();

  return first_sorted === second_sorted;
}

module.exports = sameFrequency