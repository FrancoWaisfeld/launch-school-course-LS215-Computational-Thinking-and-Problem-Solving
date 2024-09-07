function anagram(word, list) {
  return list.filter((candidate) => {
    return areAnagrams(candidate, word);
  })
}

function areAnagrams(candidate, word) {
  return word.split('').sort().join('') === candidate.split('').sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

// 