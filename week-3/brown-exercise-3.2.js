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

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 3.2");
console.log(headerMsg + "\n".repeat(2)); 

console.log(match("A", "B"));
console.log(match(2, 2) + "\n"); 

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

// six (6) test variables 
var testVar1 = "3";
var testVar2 = "Computer";
var testVar3 = "Red";
var testVar4 = "Green";
var testVar5 = 1234;
var testVar6 = 1234;

// Conditional "if...else" statements. Include checks for all six (6) test variables 
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
    logMatch(testVar3, testVar4);
} else {
    logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
    logMatch(testVar5, testVar6);
} else {
    logMismatch(testVar5, testVar6);
}




// end program 