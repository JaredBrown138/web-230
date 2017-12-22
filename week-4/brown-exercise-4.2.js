/*
============================================
; Title:  Exercise 4.2
; Author: Professor Krasso, Jared Brown 
; Date:   21 December 2017
; Modified By: Jared Brown
; Description: Prints a well formatted list
; of fruits.
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 4.2");
console.log(headerMsg + "\n".repeat(2)); 

var fruitArray = ["Apple", "Orange", "Banana", "Mango", "Pear"];

/**
 * The getFruit function takes an array and prints
 * out the contents line by line.
 * @param {*} array 
 */
function getFruit( array ) {
    array.forEach(element =>{console.log(element);});
}

getFruit(fruitArray);
