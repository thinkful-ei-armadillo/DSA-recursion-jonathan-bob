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

console.log(stringSplitter('02/20/2020', '/'));
