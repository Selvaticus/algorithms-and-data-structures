function collectStrings(nested_object) {

  const _collectStrings = (object_entries, acc = []) => {
    if (object_entries.length === 0) {
      // if no more entries to process stop the recursive chain;
      return acc;
    }

    const [_key, value] = object_entries[0];
    let rest_entries = object_entries.slice(1);

    if (typeof (value) === 'string') {
      // if a even number update the sum for this step
      acc.push(value)
    } else if (typeof (value) === 'object') {
      // if an object update the array of entries to fo through with the entries of the new object
      rest_entries = rest_entries.concat(Object.entries(value));
    }

    return _collectStrings(rest_entries, acc);
  }

  return _collectStrings(Object.entries(nested_object));
}

module.exports = collectStrings;