'use strict';

// Solutions for Eloquent Javascript chapter 5
// http://eloquentjavascript.net/05_higher_order.html

var ancestors = require('./ancestry'); //load ancestry.js
var ancestry = JSON.parse(ancestors);  //parse JSON

function average(array) {
  function plus (a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
})

//Your code here:

//Flatten
function flatten(arr) {
  var flat = arr.reduce(function(a, b) {
    return a.concat(b);
  })
  return flat;
}

//Avg mother/child age difference
function hasKnownMother(person) { //function to filter people with known mothers
  return person.mother in byName;
}

function ageDiff (person) { //function to find the difference child age and mother
  return person.born - byName[person.mother].born;
}

console.log(average(ancestry.filter(hasKnownMother).map(ageDiff))) //find average diff of mother and child age
//31.2

//Historical Life Expectancy
 var centuries = {}; //empty object to hold centuries of life expectancies

 ancestry.forEach(function(person) {
  var cent = Math.ceil(person.died / 100) //cent is a century in which someone died
  if (!(cent in centuries)) { //if century does not yet exist
    centuries[cent] = []; //then create it
  }
  centuries[cent].push(age(person)); //add a persons age to the century they belong to
 })

for (var cent in centuries) { //list average life expectancy for each century
  console.log(cent + ': ' + average(centuries[cent]));
}
// 16: 43.5
// 17: 51.2
// 18: 52.8
// 19: 54.8
// 20: 84.7
// 21: 94

//Every and Then Some
function every(arr, func) {
  for (var i in arr) {
    if (!func(arr[i])) { //if any value in array is not NaN, then false.
      return false;
    }
  }
  return true; //default to true if all values are NaN
}

function some(arr, func) { //returns true if any values pass (are not a number)
  for (var i in arr) {
    if (func(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
//true

console.log(every([NaN, NaN, 4], isNaN));
//false

console.log(some([NaN, 3, 4], isNaN));
//true

console.log(some([2, 3, 4], isNaN));
//false
