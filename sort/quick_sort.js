const pivotHelper = require('./pivot_helper');

function quickSort(items, start = 0, end = items.length) {

  if ((end - start) <= 1) {
    return items;
  }

  const pivot = pivotHelper(items, start = start, end = end);

  quickSort(items, 0, pivot);
  quickSort(items, pivot + 1, end);

  return items;
}

module.exports = quickSort;