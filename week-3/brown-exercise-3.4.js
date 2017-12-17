/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso, Jared Brown 
; Date:   17 December 2017
; Modified By: Jared Brown
; Description: Compares values and outputs
; a string describing if the values match.
;===========================================
*/ 

const CONJUNCTION = " and ";
const MATCH = " do match!";
const MISMATCH = " do not match!";
const ITERATIONS = 10;

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 3.2");
console.log(headerMsg + "\n".repeat(2)); 

// test variable
testVar = 3;
var randomInt;

// for loop
console.log("-- Displaying for loop --");
for(var i = 0; i < ITERATIONS; i++){
    randomInt = randomNumber();
    if( match(testVar, randomInt) ){
        logMatch(testVar, randomInt)
    }else{
        logMismatch(testVar, randomInt)
    }
}



// while loop
console.log("\n-- Displaying while loop --"); 
var counter = 0;
while (counter < ITERATIONS){
    randomInt = randomNumber();
    if( match(testVar, randomInt) ){
        logMatch(testVar, randomInt)
    }else{
        logMismatch(testVar, randomInt)
    }
    counter++;
}

// Reused functions from exercise-3.2.js
/**
 * Compares two values and returns the comparison.
 * @param {*} value1 
 * @param {*} value2 
 */
function match( value1, value2 ) {
    return (value1 == value2);
} 

/**
 * Prints a string indicating that the two values
 * do not match.
 * @param {*} value1 
 * @param {*} value2 
 */
function logMismatch( value1, value2 ) {
    var logMismatchString = value1 + CONJUNCTION + value2 + MISMATCH;
    console.log(logMismatchString);
}

/**
 * Prints a string indicating that the two 
 * values match.
 * @param {*} value1 
 * @param {*} value2 
 */
function logMatch ( value1, value2 ) {
    var logMatchString = value1 + CONJUNCTION + value2 + MATCH;
    console.log(logMatchString);
}

// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}