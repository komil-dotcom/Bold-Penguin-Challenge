function invalidValue(value1, value2) {
  if (!Number.isInteger(value1) || !Number.isInteger(value2)) return true;
  if (value1 <= 0 || value2 <= 0) return true;
  return false;
}

function primeNumbersGenerator(startValue, endValue) {
  const arr = [startValue, endValue].sort((a, b) => a - b); // Numerically sorted
  const [startingValue, endingValue] = arr;
  let primeNums = [];
  if (invalidValue(startValue, endValue)) {
    throw new Error("Invalid Value Entered");
  }

  console.log(`The prime numbers between ${startValue} and ${endValue} are:`);

  for (let i = startingValue; i <= endingValue; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (i > 1 && isPrime) {
      primeNums.push(i);
    }
  }
  console.log(primeNums);
}

module.exports.primeNumbersGenerator = primeNumbersGenerator;
