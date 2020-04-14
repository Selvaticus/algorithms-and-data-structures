function pivotHelper(items, start = 0, end = items.length) {
  let pivot_index = start;
  // We are taking the pivot element as the first
  const pivot = items[start];

  // if we use pivot as the first element
  // we need to start on the second one
  for (let index = start + 1; index < end; index++) {
    const element = items[index];
    if (element < pivot) {
      pivot_index++;
      items[index] = items[pivot_index];
      items[pivot_index] = element;
    }
  }

  //  Lastly we need to put the pivot element on the right place
  //  which is the pivot_index index
  items[start] = items[pivot_index];
  items[pivot_index] = pivot;

  return pivot_index;
}

module.exports = pivotHelper;