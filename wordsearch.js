const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // verticalJoin function
    // console.log(horizontalJoin);
    const verticalJoin = transpose(letters).map (ls =>ls.join(''));
    // console.log(transpose(letters))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
        } else {
          for (l of verticalJoin) {
            if (l.includes(word)) {
              return true;
            }
          }
        }
      }
      return false;
  }
const transpose = function (letters) {
    let value = [];
    for (let i = 0; i < letters[0].length; i++) {
      value[i] = [];
    //   console.log(value[i])
    };
    for (let i = 0; i < letters.length; i++) {
      // value[i] = [];
      for (let j = 0; j < letters[0].length; j++) {
        value[j][i] = letters[i][j];
        // console.log(value[j][i])
      }
    } return value;
  }

// console.log(horizontalJoin)
// const arr1= [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ]
console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'LARRY'))

module.exports = wordSearch;