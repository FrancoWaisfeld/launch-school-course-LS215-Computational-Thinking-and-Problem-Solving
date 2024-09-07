function vigenereEncrypt(plaintext, key) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';

  let ciphertext = '';
  let index = 0;
  plaintext.split('').forEach((char) => {
    if (!lowerAlphabet.includes(char.toLowerCase())) {
      ciphertext += char;
    } else {
      let currentKey = lowerAlphabet.indexOf(key[index % key.length].toLowerCase());
      index += 1;
      ciphertext += caesarEncrypt(char, currentKey);
    }
  });

  return ciphertext;
}

function caesarEncrypt(plaintext, key) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let ciphertext = '';

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      ciphertext += encrypt(char, key, upperAlphabet);
    } else if (char >= 'a' && char <= 'z') {
      ciphertext += encrypt(char, key, lowerAlphabet);
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, alphabet) {
  const letterPos = alphabet.indexOf(letter);

  for (let step = 1; step <= key; step += 1) {
    if (!alphabet[letterPos + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[letterPos + step];
  }

  return letter;
}

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'A'));
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'Aa'));
console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'cab'));
console.log(vigenereEncrypt('Dog', 'Rabbit'));



