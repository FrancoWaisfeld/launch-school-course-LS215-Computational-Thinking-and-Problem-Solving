function rotateRightmostDigits(number, n) {
  let digits = String(number).split('');
  let removedDigit = digits.splice(digits.length - n, 1)[0];
  digits.push(removedDigit)
  return Number(digits.join(''));
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917