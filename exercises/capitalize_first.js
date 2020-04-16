function capitalizeFirst(strings) {
  if (strings.length === 0) {
    return [];
  }
  const first_string = strings[0].charAt(0).toUpperCase() + strings[0].slice(1);
  return [first_string].concat(capitalizeFirst(strings.slice(1)));
}

module.exports = capitalizeFirst;