/*
input: odd integer
- represents the rows of stars to be logged
- also represents how many stars the middle row has

output: log the rows of stars

rules:
- display and 8 pointed star in an n x n grid
- n is an odd integer supplied as an argument
- n will never be less than 7
- each row consists of stars * and whitespace
- each row will always be equal in length to n
- each row other than the middle row always has 3 stars
  - the first row has stars at the leftmost and rightmost side and the middle
  - each subsequent row has the left and right stars one space closer to the middle
- the middle character of each row will always be a star
- the middle row always consists of n stars

data structure: array of strings

algorithm: 
- set firstHalf to an empty Array
- set insideSpaces to (n - 3) / 2
- set outsideSpaces to 0;

- iterate until insideSpaces is less than 0
  - append a string to rows Array consisting of:
    - outsideSpaces amount of sapces
    - a star
    - insideSpaces amount of spaces
    - a star
    - insideSpaces amount of spaces
    - a star
    - outsideSpace amount of spaces
  - decrement insideSpaces by 1
  - increment outsideSpaces by 1

- log elements in firstHalf
- log n number of stars
- log elements in firstHalf in reverse

*/

function star(count) {
  let firstHalf = [];
  let insideSpaces = (count - 3) / 2;
  let outsideSpaces = 0;

  while (insideSpaces >= 0) {
    let innnerSpaces = ' '.repeat(insideSpaces);
    let outerSpaces = ' '.repeat(outsideSpaces);
    let row = `${outerSpaces}*${innnerSpaces}*${innnerSpaces}*${outerSpaces}`;
    firstHalf.push(row);
    insideSpaces -= 1;
    outsideSpaces += 1;
  }

  console.log(firstHalf.join('\n'));
  console.log('*'.repeat(count));
  console.log(firstHalf.reverse().join('\n'));
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log(' ')

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

console.log(' ')

star(33);