'use strict';

// Solutions for Eloquent Javascript chapter 3
// http://eloquentjavascript.net/03_functions.html

//MIMIMUM:
function min(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  }
}

console.log(min(0, 10));
//0

console.log(min(0, -10));
//-10

//RECURSION

function isEven(n) {
  if (n >= 0) {
    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else {
      return isEven(n - 2)
    }
  } else {
    if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isEven(50));
//true

console.log(isEven(75));
//false

console.log(isEven(-1));
//??

//BEAN-COUNTING

function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
      count++;
    }
  }
  return count;
}

function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count ++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
//2

console.log(countChar("kakkerlak", "k"))
//4
