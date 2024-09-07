function featured(number) {
  const MAX_FEATURED_NUMBER = 9876543201;
  let featuedNumber = "There is no possible number that fulfills those requirements.";
  let currenetNumber = number - (number % 7) + 7;
  while (typeof(featuedNumber) !== 'number') {
    if (currenetNumber % 2 !== 0 && hasUniqueDigits(currenetNumber)) {
      featuedNumber = currenetNumber;
      break;
    }

    currenetNumber += 7;

    if (currenetNumber > MAX_FEATURED_NUMBER) {
      break;
    }
  }

  return featuedNumber;
}

function hasUniqueDigits(number) {
  let digits = String(number).split('');

  return digits.filter((num, index, arr) => {
    return arr.indexOf(num) === index;
  }).length === digits.length;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."