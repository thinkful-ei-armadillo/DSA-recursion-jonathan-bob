'use strict';

function countSheep(num) {

  // num is equal to 0 return "All sheep jumped over the fence"
  if (num === 0) {
    return console.log('All sheep jumped over the fence');
  }

  // decrease num by one "Another sheep jumps over the fence"
  console.log(`${num}, Another sheep jumps over the fence`);
  return countSheep(num - 1);
}
//countSheep(3);

function powerCalculator(baseInt, expInt) {
  // exponent should be >= 0
  if (expInt < 0) {
    return 'exponent should be >= 0';
  }
  if (expInt === 0) {
    return 1;
  }
  if (expInt >= 1) {
    return baseInt * powerCalculator(baseInt, expInt - 1);
  }
}

//const result = powerCalculator(10, -3);
//console.log(result);

function reverseString(str) {
  // if str.length is equal to 0 return ''
  if (str.length === 0) {
    return '';
  }
  // get last character of string
  const lastLetter = str.slice(-1);

  // concate that character without last character of base string
  return lastLetter + reverseString(str.slice(0, str.length - 1));

}

/* const resString = reverseString('hello world');
console.log(resString); */

// input is number in sequence
function triangularNthCal(num) {

  // if num is 1 return 1
  if (num === 1) {
    return 1;
  }
  return num + triangularNthCal(num - 1);
  
}
//console.log(triangularNthCal(5));

function stringSplitter(str, sep) {
  // if string length is 0 return ''
  if (str.length === 0) {
    return '';
  }

  // if current str index is equal to sep return splice on that index
  if (str[0] !== sep) {
    return str[0] + stringSplitter(str.slice(1, str.length), sep);
  }
  return stringSplitter(str.slice(1, str.length - 1), sep);
}

//console.log(stringSplitter('02/20/2020', '/'));

function fibonacci(num, sequence = []) {
  //base case
  if(num === 0) {
    return sequence;
  }

  if(sequence.length <= 1 ){
    sequence.push(1);
  }
  else {
    sequence.push(sequence[sequence.length-2] + sequence[sequence.length - 1]);
  }

  console.log(sequence);
  return fibonacci(num -1, sequence);
}
//(fibonacci(7));

function factorial(num) {
  //base case num === 1
  if (num === 1 ) {
    return 1;
  }


  return num * factorial(num -1);
}
//console.log(factorial(5));


let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
//start: maze[0][0]
//end: maze[5][7]

function solveMaze(maze, col = 0, row =0, starting = maze[col][row]) {
  //no space in all directions - GET OUT NOW -- print current location

  if (maze[col + 1][row] === 'e') {
    maze[col][row] = 'd';
    return maze;
  }
  if (maze[col][row + 1] === 'e') {
    maze[col][row] = 'r';
    return maze;
  }

  const isRight = (row >= 6) ? false : maze[col][row+1] === ' ';
  const isDown = (col >= 4) ? false : maze[col + 1 ][row] === ' ';
  //cant happe if row is 0
  const isLeft = (row <= 0) ? false : maze[col][row -1] === ' ';
  // cant happen if col is 0
  const isUp = (col <= 0) ? false : maze[col - 1][row] === ' ';

  if (isRight) {
    maze[col].splice(row,1,'r');
    row += 1;
    return solveMaze(maze, col, row, starting = maze[col][row]);
  }
  if (isDown) {
    maze[col].splice(row, 1, 'd');
    col += 1;
    return solveMaze(maze, col, row, starting = maze[col][row]);
  }
  if (isLeft) {
    maze[col].splice(row, 1, 'l');
    row -= 1;
    return solveMaze(maze, col, row, starting = maze[col][row]);
  }
  if (isUp) {
    maze[col].splice(row, 1, 'u');
    col -= 1;
    return solveMaze(maze, col, row, starting = maze[col][row]);
  }

}

//console.log(solveMaze(maze));

/*PROBLEM 9 
Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/

function anagram(word) {
  let solution = [];

  if (word.length === 1) {
    solution.push(word);
    return solution;
  }

  for (let i = 0; i < word.length; i++) {
    const letters = word.slice(0,i) + word.slice(i+1, word.length);
    const firstLetter = word[i];
    
    let newArray = anagram(letters);
 
    for (let j = 0; j< newArray.length; j++) {
      solution.push(firstLetter + newArray[j]);
    }
  }
  return solution;
}

console.log(anagram('east').length);

/* problem 11 */

/* problem 12 */
