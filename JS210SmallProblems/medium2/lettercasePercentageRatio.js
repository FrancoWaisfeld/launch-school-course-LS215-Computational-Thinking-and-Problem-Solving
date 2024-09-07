function letterPercentages(string) {
  let upperCaseCount = (string.match(/[A-Z]/g) || []).length
  let lowerCaseCount = (string.match(/[a-z]/g) || []).length
  let neitherCount = (string.match(/[^A-Za-z]/g) || []).length
  let lowerCasePercentage = String(((lowerCaseCount / string.length) * 100).toFixed(2));
  let upperCasePercentage = String(((upperCaseCount / string.length) * 100).toFixed(2));
  let neitherPercentage = String(((neitherCount / string.length) * 100).toFixed(2));


  return {
    lowercase: lowerCasePercentage,
    uppercase: upperCasePercentage,
    neither: neitherPercentage,
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }