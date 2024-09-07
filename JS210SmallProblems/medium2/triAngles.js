function triangle(angle1, angle2, angle3) {
  let [smallest, middle, largest] = [angle1, angle2, angle3].sort((a, b) => a - b);

  if (isInvalidTriangle(smallest, middle, largest)) {
    return 'invalid';
  } else if (largest === 90) {
    return 'right';
  } else if (largest < 90) {
    return 'acute';
  } else {
    return 'obsuse';
  }
}

function isInvalidTriangle(smallest, middle, largest) {
  if (smallest + middle + largest !== 180 || smallest <= 0) {
    return true;
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"