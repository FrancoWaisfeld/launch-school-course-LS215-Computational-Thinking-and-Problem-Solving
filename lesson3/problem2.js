// input: string mesage , number of rails as number
// output: 

// rules:
//  

// data structure: array of arrays containing number of rails with letters and . per row

// algorithm:
//  set rows to createNestedArray(railsCount)
//  set currentRowIndex to 0
//  set lettersOnly to the letters in the string message with all whitespace removed

//  iterate through lettersOnly
//    currenRowIndex = currenRowIndex % railsCount;
//    iterate index number of times, each time added a '.' to the row at currentRowIndex
//    add the letter at the current index of lettersOnly to the row at currentRowIndexx
//    increment currentRowIndex by 1
// log each row in order

function encodeRailFence(message, railsCount) {
  let rows = createNestedArray(railsCount);
  let currenRowIndex = 0;
  let goingUp = true;
  let elementCount = 0;
  let lettersOnly = message.match(/\S/g).map(letter => letter.toUpperCase());

  lettersOnly.forEach((letter, index) => {
    if (currenRowIndex === railsCount - 1 || currenRowIndex === 0 && !goingUp) {
      goingUp = !goingUp;
    }

    for (let idx = 0; idx < rows.length; idx += 1) {
      if (currenRowIndex === idx) {
        continue;
      } else {
        rows[idx].push('.');
      }
    }

    rows[currenRowIndex].push(letter);

    if (goingUp) {
      currenRowIndex += 1;
    } else {
      currenRowIndex -= 1;
    }

    elementCount += 1;
  })

  displayRows(rows);
}

function displayRows(rows) {
  rows.forEach(row => {
    console.log(row.join(''));
  });
}

function createNestedArray(nestedCount) {
  let nestedArray = [];

  for (let count = 1; count <= nestedCount; count += 1) {
    nestedArray.push([]);
  }

  return nestedArray;
}

encodeRailFence('WE ARE DISCOVERED FLEE AT ONCE', 4)

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .


// W . . . . . I . . . . . R . . . . . E . . . . . E
// . E . . . D . S . . . E . E . . . E . A . . . C .
// . . A . E . . . C . V . . . D . L . . . T . N . .
// . . . R . . . . . O . . . . . F . . . . . O . . .

// W . A . E . I . C . V . R . D . L . E . T . N . E
// . E . R . D . S . O . E . E . F . E . A . O . C .