'use strict';

// Solutions for Eloquent Javascript chapter 2
// http://eloquentjavascript.net/02_program_structure.html

//Your code here:

//LOOPING TRIANGLE
var triangleLoop = function() {
  var hash = '';
  for (var i = 0; i < 7; i++) {
    hash += '#';
    console.log(hash)
  }
}

triangleLoop();

//FIZZBUZZ:
var fizzBuzz = function() {
  for (var i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

//CHESSBOARD:
var chessboard = function() {
  var size = 8; //create a chessboard 8x8
  var board = '';

  for (var i = 0; i < size; i++) {
    if (i % 2 == 0){
      var test = size / 2;
      for (var j = 0; j < test; j++) {
        board += '# ';
      }
    } else {
      var test = size / 2;
      for (var j = 0; j < test; j++) {
        board += ' #';
      }
    }
    board += '\n';
  }
  console.log(board)
}

chessboard();
