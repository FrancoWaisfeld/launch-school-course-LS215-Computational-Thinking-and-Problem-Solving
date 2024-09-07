function fridayThe13ths(year) {
  let count = 0;
  const DAY = 13;
  let month = 0;

  for (month; month < 12; month += 1) {
    let dateToCheck = new Date(year, month, DAY);
    if (dateToCheck.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
