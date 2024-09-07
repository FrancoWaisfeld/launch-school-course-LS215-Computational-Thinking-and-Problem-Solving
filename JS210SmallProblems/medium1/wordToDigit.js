/*
  innput: String
  output: String with number words turned to numbers

  rules:
  - take a sentence string as an argumnet
  - return teh sentence string with number words replaced with digits
  - only need to replace numbers 0 to 9

  algorithm:
  - create an object that maps number words to digit strings
  - declare a digitString variable
  - iterate through the keys and values of the object
    - set digitString to a string of the keys in the argument string replaced with the value
  - return digitString
*/

function wordToDigit(string) {
  const wordNumberToDigit = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  }

  Object.keys(wordNumberToDigit).forEach((key) => {
    let regex = new RegExp(key, 'g');
    string = string.replace(regex, wordNumberToDigit[key]);
  });

  return string;
}



console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."