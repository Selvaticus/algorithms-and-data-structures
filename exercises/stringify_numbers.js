function stringifyNumbers(nested_object) {
  const _stringifyNumbers = (object_entries, acc = {}) => {
    if (object_entries.length === 0) {
      // if no more entries to process stop the recursive chain;
      return acc;
    }

    const [key, value] = object_entries[0];
    const rest_entries = object_entries.slice(1);

    if (typeof (value) === 'number') {
      // if a even number update the sum for this step
      acc[key] = value.toString();
    } else if (Array.isArray(value)) {
      // special case for when it is an array
      acc[key] = value;
    } else if (typeof (value) === 'object') {
      // if an object update the array of entries to fo through with the entries of the new object
      const new_object = _stringifyNumbers(Object.entries(value));
      acc[key] = new_object;
    } else {
      // if not number to convert of object to iterate through, than just keep the key value pair
      acc[key] = value;
    }

    return _stringifyNumbers(rest_entries, acc);
  }

  return _stringifyNumbers(Object.entries(nested_object));
}

module.exports = stringifyNumbers;