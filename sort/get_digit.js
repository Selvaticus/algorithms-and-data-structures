function getDigit(number, position) {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

module.exports = getDigit;