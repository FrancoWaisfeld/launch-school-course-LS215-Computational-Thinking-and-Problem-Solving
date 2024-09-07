/*
input: odd integer
output: log n number of strings consisting of '*'

rules:
- integer argument will always be odd
- diplay a four pointed diamond in an n by n grid
- The middle row will always have an amount of stars equal to n
- As the rows move away from the middle row, they have 2 less star each row
- The final row on each side has 1 star
- The rows are all centered, meaning as the rows move away from the middle they
  are padded with spaces.

datastructure: Array of strings

algorithm:
- set spaces to n / 2 rounded down (Math.floor)
- set stars to 1
- set firstHalf to an empty Array
- iterate until stars === n
  - add a string to rows consisting of stars number of *
    prepended by spaces number of spaces
  - increment stars by 2
  - decrement spaces by 1
- set secondHalf to reversed firstHalf
- set middleRow to n number of stars
- set allRows to result of concatenate firstHalf, middleRow, secondHalf
- iterate through allRows and log each element





- set middleRow equal to a String of n stars *

*/

function diamond(rowCount) {
  let spaces = Math.floor(rowCount / 2);
  let stars = 1;
  let firstHalf = [];

  while (stars < rowCount) {
    firstHalf.push(' '.repeat(spaces) + '*'.repeat(stars));
    stars += 2;
    spaces -= 1;
  }
  
  let middleRow = '*'.repeat(rowCount);

  console.log(firstHalf.join('\n'));
  console.log(middleRow);
  console.log(firstHalf.reverse().join('\n'));
}


// examples:
diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *