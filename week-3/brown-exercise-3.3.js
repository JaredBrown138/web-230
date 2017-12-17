/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso, Jared Brown 
; Date:   17 December 2017
; Modified By: Jared Brown
; Description: Changed if elif block to a
; switch statement. 
;===========================================
*/ 
var header = require('../header.js'); 
var headerMsg = header.display("Jared", "Brown", "Exercise 3.3");
console.log(headerMsg + "\n".repeat(2)); 

// start program
var eventKeyCode = 13;
switch(eventKeyCode){
    case 13:
        console.log("The enter key was pressed");
        break;
    case 16:
        console.log("The shift key was pressed");
        break;
    case 32:
        console.log("The spacebar key was pressed")
        break;
    case 8:
        console.log("The backspace / delete key was pressed");
        break;
    default:
        console.log("Unrecognized key press"); 
        break;
}
