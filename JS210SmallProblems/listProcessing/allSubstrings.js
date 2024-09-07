function substrings(string) {
  return string.split('').map((_letter, index) => {
    return leadingSubstrings(string.slice(index))
  }).flat();
}

function leadingSubstrings(string) {
  return string.split('').map((_letter, index) => string.slice(0, index + 1));
}

console.log(substrings('abcde'));