function incrementLastDigit(numStr) {
  const splitedNumber = numStr.split('.')

  if (splitedNumber.length === 1) {
    return `${numStr}.1`
  }
  const decimalPart = parseFloat(splitedNumber[1]) + 1;

  return `${splitedNumber[0]}.${decimalPart}`
};

module.exports = incrementLastDigit;