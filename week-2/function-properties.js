/*
============================================
; Title:  Exercise 2.3
; Author: Professor Krasso, Jared Brown 
; Date:   5 December 2017
; Modified By: Jared Brown
; Description: An exercise on function
; properties.
;===========================================
*/ 

var header = require('../header.js'); 
var headerMsg = header.display("Jared", "Brown", "Exercise 2.3");

myName.jaredBrown = "Jared Brown";

/**
 * The myName() function gets its own property jaredBrown and
 * returns it. 
 * 
 * @param 
 * @returns myname.jaredBrown
 */ 
function myName() {
  return myName.jaredBrown;  
}

var printMsg = headerMsg + '\n'.repeat(2) + "Hello " + myName() + "!";
console.log(printMsg); 





