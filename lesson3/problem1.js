function cleanPhoneNumber(numString) {
  const DEFAULT = '0'.repeat(10);
  let cleaned = numString.replace(/\D/g, '');
  let cleanedLength = cleaned.length;

  if (cleanedLength === 10) {
    return cleaned;
  } else if (cleaned[0] === '1' && cleanedLength === 11) {
    return cleaned.slice(1);
  } else {
    return DEFAULT;
  }
}

console.log(cleanPhoneNumber('111') === '0000000000');
console.log(cleanPhoneNumber('') === '0000000000');
console.log(cleanPhoneNumber('222222222a') === '0000000000');
console.log(cleanPhoneNumber('12222222222') === '2222222222');
console.log(cleanPhoneNumber('2222222222') === '2222222222');
console.log(cleanPhoneNumber('32222222222') === '0000000000');
console.log(cleanPhoneNumber('112222222222') === '0000000000');
console.log(cleanPhoneNumber('1   +++;;;sdsf adosifj ads22222222asdfads   asdfad  --=++22') === '2222222222');
