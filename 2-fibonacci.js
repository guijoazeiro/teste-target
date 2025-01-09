function isFibonacci(num) {
  if (num < 0 || !Number.isInteger(num)) return false;

  let prev = 0,
    curr = 1;

  while (curr <= num) {
    if (curr === num) return true;
    [prev, curr] = [curr, prev + curr];
  }

  return false;
}

const number = 55;
if (isFibonacci(number)) {
  console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`);
}
