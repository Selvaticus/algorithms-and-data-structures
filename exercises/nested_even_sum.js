function nestedEvenSum(nested_object) {

  const isEven = (number) => {
    return number % 2 === 0;
  }

  const _nestedEvenSum = (object_entries) => {
    if (object_entries.length === 0) {
      // if no more entries to process stop the recursive chain;
      return 0;
    }

    const [_key, value] = object_entries[0];
    let rest_entries = object_entries.slice(1);

    let sum = 0;
    if (typeof (value) === 'number') {
      // if a even number update the sum for this step
      sum = isEven(value) ? value : 0;
    } else if (typeof (value) === 'object') {
      // if an object update the array of entries to fo through with the entries of the new object
      rest_entries = rest_entries.concat(Object.entries(value));
    }

    return sum + _nestedEvenSum(rest_entries);
  }

  return _nestedEvenSum([['top_object', nested_object]]);
}

module.exports = nestedEvenSum;