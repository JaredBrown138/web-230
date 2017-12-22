/*
============================================
; Title:  Exercise 4.3
; Author: Professor Krasso, Jared Brown 
; Date:   21 December 2017
; Modified By: Jared Brown
; Description: Prints a well formatted list
; of vehicles and then filters one.
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 4.3");
console.log(headerMsg + "\n".repeat(2)); 

const SELECTED_VALUE = "Bus";

const ARRAY_TITLE = "-- DISPLAYING ARRAY ITEMS --";
const SELECTED_TITLE = "-- SELECTED VALUE --";

var vehicleArray = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

/**
 * This function prints the array out and then
 * filters the array and selects an element based
 * on the provided argument. 
 * @param {*} arr 
 * @param {*} val 
 */
function getValue(arr, val) {
    console.log(ARRAY_TITLE);
    arr.forEach(element => {console.log(element)});
    console.log("\n".repeat(2) + SELECTED_TITLE);
    arr.forEach(element =>{
        if(element === val)
            console.log(val);
    });
}

getValue(vehicleArray, SELECTED_VALUE);
