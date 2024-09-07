function lightsOn(switches) {
  let lights = generateSwitchesArray(switches);
  let turnedOnLights = [];

  for (let round = 1; round <= switches; round += 1) {
    for (let index = 0; index < lights.length; index += 1) {
      let currentLight = lights[index];

      if (currentLight % round !== 0) {
        continue;
      }

      if (turnedOnLights.includes(currentLight)) {
        let currentLightIndex = turnedOnLights.indexOf(currentLight);
        turnedOnLights.splice(currentLightIndex, 1);
      } else {
        turnedOnLights.push(currentLight);
      }
    }
  }

  return turnedOnLights.sort((a, b) => a - b);
}

function generateSwitchesArray(switchesCount) {
  let lights = [];
  for (let count = 1; count <= switchesCount; count += 1) {
    lights.push(count);
  }

  return lights;
}

console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(0)) // []
console.log(lightsOn()) // []
console.log(lightsOn(100)) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(1)) // [1]
