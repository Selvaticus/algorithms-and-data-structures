function selectionSort(items) {
  let i = 0;
  while (i < items.length) {
    let smallest = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      let temp = items[i];
      items[i] = items[smallest];
      items[smallest] = temp;
    }
    i++;
  }
  return items;
}

module.exports = selectionSort;