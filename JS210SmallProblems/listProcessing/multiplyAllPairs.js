function multiplyAllPairs(list1, list2) {
  let result = [];

  list1.forEach((number1) => {
    list2.forEach((number2) => {
      result.push(number1 * number2);
    });
  });

  return result.sort((num1, num2) => num1 - num2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]