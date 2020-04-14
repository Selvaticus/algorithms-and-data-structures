function recursiveInRange(range) {
  if (range < 1) return 0;
  return range + recursiveInRange(--range);
}

module.exports = recursiveInRange;