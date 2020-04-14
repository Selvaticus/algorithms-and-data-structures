function power(base, exponent) {
  if (exponent < 1) return 1;
  return base * power(base, exponent - 1);
}

module.exports = power