/*
input: string and an integer
output: encrypted string

rules:
- substitue alphabetic characters with the letter n places to the right
- subsituted letters must remain in the same case
- leave all other characters the same
- if the integer argument exceeds the length of the alphabet, it wraps around from teh start

algorithm:
- set a const ALPHABET to lowercase letters in the alphabet.
- set characters to the characters in the argument string
- set encryptedMessage to an empty string
- iterate through characters
  - if the lowercase version of the letter is in AlPHABET
    - set letterIndex to the letters index in ALPHABET
    - set encryptedIndex to letterIndex + n
    - if encryptedIndex is greater than ALPHABET.length
      - set encryptedIndex to encryptedindex % ALPHABET.length
    - set encryptedLetter to the letter at encryptedIndex of ALPHABET to encryptedMessage
    - if letter is equal to uppercae veresion of itself
      -  set encryptedLetter to the uppercase version of letter at encryptedIndex of ALPHABET to encryptedMessage
    - concatenate encryptedLetter to encryptedMessage
  - else
    concatenate letter to encryptedMessage
*/

function caesarEncrypt(message, shift) {
  const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                    'y', 'z'];

  const characters = message.split('');
  let encryptedMessage = '';

  characters.forEach(char => {
    if (ALPHABET.includes(char.toLowerCase())) {
      letterIndex = ALPHABET.indexOf(char.toLowerCase());
      let encryptedIndex = letterIndex + shift;
      if (encryptedIndex >= ALPHABET.length) {
        encryptedIndex = encryptedIndex % ALPHABET.length;
      }

      let encryptedLetter = ALPHABET[encryptedIndex];
      encryptedLetter = isUpperCase(char) ? encryptedLetter.toUpperCase() : encryptedLetter;
      encryptedMessage += encryptedLetter;
    } else {
      encryptedMessage += char;
    }
  });

  return encryptedMessage;
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"