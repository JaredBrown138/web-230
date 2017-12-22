/*
============================================
; Title:  Exercise 4.4
; Author: Professor Krasso, Jared Brown 
; Date:   21 December 2017
; Modified By: Jared Brown
; Description: Prints a well formatted list
; of states, then an aplpahbetically ordered
; list of those states, then uses the filter
; method to create and print out a new array
; with the selected state. 
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 4.4");
console.log(headerMsg + "\n".repeat(2)); 

const ORIGINAL_ARRAY = "-- ORIGINAL ARRAY --";
const SORTED_ARRAY = "-- SORTED ARRAY ---";
const SELECTED_ARRAY = "-- SELECTED VALUE --";
const NEW_LINE = "\n";

const SELECT_VALUE = "Iowa";
var statesArray = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

/**
 * This function is a predicate which
 * returns a boolean value depending on
 * the strict comparison of both arguments.
 * @param {*} x 
 * @param {*} val 
 */
function getValue(x, val) {
    return (x === val);
}
 
console.log(ORIGINAL_ARRAY);
statesArray.forEach(e =>{console.log(e)});

console.log(NEW_LINE.repeat(2) + SORTED_ARRAY)
statesArray.sort().forEach(e => {console.log(e)});

var selectedStates = statesArray.filter(x => {
    return getValue(x, SELECT_VALUE);
 });

console.log(NEW_LINE.repeat(2) + SELECTED_ARRAY);
selectedStates.forEach(e =>{console.log(e)});


