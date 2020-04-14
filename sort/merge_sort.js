const mergeArrays = require('./merge_arrays');

function mergeSort(items) {
  const items_length = items.length;

  if (items_length <= 1) {
    return items;
  }

  const half_length = Math.floor(items_length / 2);

  const sorted_first_half = mergeSort(items.slice(0, half_length));
  const sorted_second_half = mergeSort(items.slice(half_length))

  return mergeArrays(sorted_first_half, sorted_second_half);
}

module.exports = mergeSort;