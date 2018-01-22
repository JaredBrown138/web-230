/*
============================================
; Title:  Exercise 6.2
; Author: Professor Krasso, Jared Brown 
; Date:   21 January 2018
; Modified By: Jared Brown
; Description: Introduces an error to test a try-catch-finally
; block.  
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 6.2");
console.log(headerMsg + "\n".repeat(2));

/**
 * A constructor for the RandFloat object which contains an array of
 * random floats as well as a method which sums the array. 
 * @param {*} arraySize 
 */
function RandFloat(arraySize){
    this.defaultArraySize = 10;
    try {
        this.randFloatArray = Array.apply(null, Array(arraySize));
    } catch (err) {
        console.log("Catch Clause: " + err);
    } finally {
        this.randFloatArray = Array.apply(null, Array(this.defaultArraySize))
        console.log("Finally Clause: Default Array Length ("
         + this.defaultArraySize + ") used." );
    }
    //Set each item in array to be a random float
    this.randFloatArray.forEach((v, i, a) =>{a[i] = Math.random()});
    /**
     * A method which returns the sum of all elements in the randFloatArray
     * using the Array.reduce() method.
     */
    this.realSum = function(){
        return this.randFloatArray.reduce((prev, curr) => prev + curr);
    }
}

var myRandObject = new RandFloat(3.4);
console.log(myRandObject.realSum());

