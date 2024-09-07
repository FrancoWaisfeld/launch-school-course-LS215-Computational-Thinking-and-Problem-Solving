function sumSquareDifference(number) {
  let numbers = integersFrom1To(number);
  let sumSquare = numbers.reduce((accum, num) => accum + num)**2;
  let squareSum = numbers.reduce((accum, num) => accum + num**2, 0);
  return sumSquare - squareSum;
}

function integersFrom1To(number) {
  let numbers = [];

  for (let num = 1; num <= number; num +=1) {
    numbers.push(num);
  }

  return numbers;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150