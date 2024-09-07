/*
*/

function maxRotation(number) {
  let count = String(number).length;
  let maxRotatedNumber = number;

  while (count > 0) {
    maxRotatedNumber = rotateRightmostDigits(maxRotatedNumber, count);
    count -= 1;
  }

  return maxRotatedNumber
}

function rotateRightmostDigits(number, n) {
  let digits = String(number).split('');
  let removedDigit = digits.splice(digits.length - n, 1)[0];
  digits.push(removedDigit)
  return Number(digits.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845