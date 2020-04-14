function insertSort(items) {
  for (let i = 1; i < items.length; i++) {
    let element = items[i];
    for (let j = 0; j < i; j++) {
      if (element < items[j]) {
        items[i] = items[j];
        items[j] = element;
        element = items[i];
      }
    }
  }
  return items;
}

module.exports = insertSort;