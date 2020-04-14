function bubbleSort(items) {
  let i = items.length;
  while (i > 0) {
    for (let j = 0; j < (i - 1); j++) {
      const element = items[j];
      if (element > items[j + 1]) {
        items[j] = items[j + 1];
        items[j + 1] = element;
      }
    }
    i--;
  }
  return items;
}

module.exports = bubbleSort