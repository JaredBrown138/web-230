/*
============================================
; Title:  Exercise 5.2
; Author: Professor Krasso, Jared Brown 
; Date:   12 January 2018
; Modified By: Jared Brown
; Description: Uses the forEach method to iterate
; over the foods array and prints each item. 
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 Exercise 5.2
 Today's Date

 Oysters
 Shrimp
 Steak
 Tacos
 Sushi

 */

// start program
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 5.2");
console.log(headerMsg + "\n".repeat(2)); 

var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];
foods.forEach( food => { console.log(food) } );







// end program