function flatten(elements, acc = []) {
  if (elements.length === 0) {
    return acc;
  }

  const first_elem = elements.shift();

  if (Array.isArray(first_elem)) {
    acc = flatten(first_elem, acc);
  } else {
    acc.push(first_elem);
  }

  return flatten(elements, acc);
}

module.exports = flatten;