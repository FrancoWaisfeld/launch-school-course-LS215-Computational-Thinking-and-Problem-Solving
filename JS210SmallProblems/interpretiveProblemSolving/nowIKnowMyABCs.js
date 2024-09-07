/*
input: word
output: boolean

rules:
- a collection of spelling blocks has two letters per block (shown below)
- each block may only be used onced to spell a word
  - this limits the word you can spell to words that don't have boht letters
    in a block OR don't use the smae letter twice
- return true if a word can be spelled and false if not.

data structure: nested arrays containing block pairs

algorithm:
- set blocks to an Array containing both letters of the block pair as strings
  - iterate through letter in word argument
  - set missingBlock to true
    - itereate through blocks
      - if the letter is a substring of block
        - remove the block from blocks
        - set missingBlock to false
        - stop iterating
    - if missingBlock is true the return false
  - return true

*/

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU',
                'VI', 'LY', 'ZM'];
  let letters = word.split('');

  for (let index = 0; index < letters.length; index += 1) {
    let matchingBlock = blocks.filter(block => {
      return block.includes(letters[index].toUpperCase());
    })[0];

    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1)
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false