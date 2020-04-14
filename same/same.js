function same(first_list, second_list) {
  if (first_list.length == 0 && second_list.length == 0) {
    return true
  } else if (first_list.length !== second_list.length) {
    return false
  }

  const first_sorted = first_list.sort();
  const second_sorted = second_list.sort();

  for (let index = 0; index < first_list.length; index++) {
    const first_elem = first_sorted[index];
    const second_elem = second_sorted[index];
    if (first_elem * first_elem !== second_elem) {
      return false
    }
  }

  return true
}

module.exports = same