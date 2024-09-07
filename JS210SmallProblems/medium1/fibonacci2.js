function fibonacci(nth) {
  if (nth <= 2n) {
    return 1n;
  } else {
    if (memoization.nth !== undefined) {
      return memoization.nth
    } else {
      memoization[nth] = fibonacci(nth - 1n) + fibonacci(nth - 2n);
      return memoization[nth]
    }
  }
}

let memoization = {};

console.log(fibonacci(1n));       // 1
console.log(fibonacci(2n));       // 1
console.log(fibonacci(3n));       // 2
console.log(fibonacci(4n));       // 3
console.log(fibonacci(5n));       // 5
console.log(fibonacci(12n));      // 144
console.log(fibonacci(20n));      // 6765
console.log(fibonacci(40n));
