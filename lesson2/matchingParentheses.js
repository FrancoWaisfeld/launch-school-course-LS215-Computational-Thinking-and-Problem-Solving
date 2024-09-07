function isBalanced(string) {
  let parenthesisCount = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (parenthesisCount < 0) {
      return false;
    } else if (string[index] === '(') {
      parenthesisCount += 1;
    } else if (string[index] === ')') {
      parenthesisCount -= 1;
    }
  }

  return parenthesisCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false