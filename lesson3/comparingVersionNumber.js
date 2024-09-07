// input:  any two version numbers
// output: 1, -1, 0, or null

// rules:
// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and 
// the . character, we should return null

// data structure: array

// algorithm:
// split each version number into an array, using . as seperators
// iterate through the array, comparing version numbers at the same index.
  // if the element at the current index is not a number, than return null
  // if the element at the current index is undefined, than set it to 0
  // if the version numbers are equal, continue to the next iteration
  // if the versions number in version1 is smaller, return -1
  // if the versions number in version1 is larger, return 1
// If the loop terminates and nothing was return (all numbers were equal) then
// return 0;

function compareVersions(version1, version2) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(version1) || !validChars.test(version2)) {
    return null;
  }

  let version1Parts = version1.split('.').map(Number);
  let version2Parts = version2.split('.').map(Number);
  let limit = Math.max(version1Parts.length, version2Parts.length);

  for (let index = 0; index < limit; index += 1) {
    let part1 = version1Parts[index] || 0;
    let part2 = version2Parts[index] || 0;
    if (part1 < part2) {
      return -1;
    } else if (part1 > part2) {
      return 1;
    }
  }

  return 0;
}

// examples:
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1


