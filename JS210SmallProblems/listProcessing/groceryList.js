function buyFruit(groceryList) {
  let fruits = [];

  groceryList.forEach((itemAndQuantity) => {
    let quantity = itemAndQuantity[1];
    let item = itemAndQuantity[0];

    for (let count = 1; count <= quantity; count += 1) {
      fruits.push(item);
    }
  })

  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));