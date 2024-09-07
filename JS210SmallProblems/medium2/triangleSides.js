function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];

  if (!isValidTriangle(sides)) {
    return 'invalid';
  } else if (isEquilateral(sides)) {
    return 'equilateral';
  } else if (isIsosceles(sides)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function isValidTriangle(sides) {
  sides.sort((a, b) => a - b);

  if (sides.every(side => side < 0) || sides[0] + sides[1] <= sides[2]) {
    return false;
  }

  return true;
}

function isEquilateral(sides) {
  return sides.filter((side, index, arr) => {
    return arr.indexOf(side) === index;
  }).length === 1;
}

function isIsosceles(sides) {
  return sides.filter((side, index, arr) => {
    return arr.indexOf(side) === index;
  }).length === 2;
}

function isScalene(sides) {
  return sides.filter((side, index, arr) => {
    return arr.indexOf(side) === index;
  }).length === 3;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"