function processBands(data) {
  return data.map((band) => {
    let capitalizedBandName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedBandName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  return phrase.split(' ')
               .map( word => capitalizeString(word))
               .join(' ');
}

function capitalizeString(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function removeDotsInString(string) {
  return string.replaceAll('.', '');
}

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));
console.log(bands);