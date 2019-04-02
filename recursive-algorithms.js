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


let defaultMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
//start: maze[0][0]
//end: maze[5][7]

function solveMaze(maze, row = 0, col =0) {
  //no space in all directions - GET OUT NOW -- print current location

  if (col+1 <= 6 && maze[row][col + 1] === 'e') {
    maze[row][col] = 'r';
    console.log(maze);
    return maze;
  }
  if (row + 1 <= 4 && maze[row+1][col] === 'e') {
    maze[row][col] = 'd';
    console.log(maze);
    return maze;
  }

  const isRight = (col >= 6) ? false : maze[row][col + 1] === ' ';
  const isDown = (row >= 4) ? false : maze[row + 1 ][col] === ' ';
  //cant happe if col is 0
  const isLeft = (col <= 0) ? false : maze[row][col -1] === ' ';
  // cant happen if row is 0
  const isUp = (row <= 0) ? false : maze[row - 1][col] === ' ';
  let newMaze;
  if (isRight) {
    newMaze = maze.slice(0).map(row => row.slice(0)); 
    newMaze[row].splice(col,1,'r');
    solveMaze(newMaze, row, col+1);
  }
  if (isDown) {
    newMaze = maze.slice(0).map(row => row.slice(0));
    newMaze[row].splice(col, 1, 'd');
    solveMaze(newMaze, row+1, col);
  }
  if (isLeft) {
    newMaze = maze.slice(0).map(row => row.slice(0));
    newMaze[row].splice(col, 1, 'l');
    solveMaze(newMaze, row, col-1);
  }
  if (isUp) {
    newMaze = maze.slice(0).map(row => row.slice(0));
    newMaze[row].splice(col, 1, 'u');
    solveMaze(newMaze, row-1, col);
  }

}

console.log(solveMaze(defaultMaze));

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

//console.log(anagram('east').length);

/* problem 11 */

/* problem 12 */
