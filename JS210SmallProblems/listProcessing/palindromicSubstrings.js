function palindromes(string) {
  return substrings(string).filter(isPalindrome)
}

function isPalindrome(word) {
   return word.length > 1 && word === word.split('').reverse().join('') 
}

function substrings(string) {
  return string.split('').map((_letter, index) => {
    return leadingSubstrings(string.slice(index))
  }).flat();
}

function leadingSubstrings(string) {
  return string.split('').map((_letter, index) => string.slice(0, index + 1));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));