/*
input: integer
output: integer representing index of first fibonacci number that has n digits
  - index starts at 1

rules: 
- calculate and return the index of the first fib number that has n digits
- first fibonacci number has index 1

data structure: array

alogorithm:
function fibonacci(nth)
- if nth is less than or equal to 2 than return 1
- set firstNumber to 1
- set secondNumber to 1
- set count to 2
- iterate until nth is equal to count
  - set tempt to secondNumber;
  - set secondNumber to firstNumber + secondNumber
  - set firstNumber to temp
- return secondNumber;

function findFibonacciIndexByLength(lenght)
- set index to 1
- intialize currentLength
- iterate while currentLength is less than length
  - set currentLength to String(fibonacci(index)).split('').length
  - increment index by 1
- return index
*/

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

console.log(findFibonacciIndexByLength(2n)=== 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.