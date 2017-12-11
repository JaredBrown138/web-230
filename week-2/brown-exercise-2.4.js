/*
============================================
; Title:  Exercise 2.4
; Author: Professor Krasso, Jared Brown 
; Date:   5 December 2017
; Modified By: Jared Brown
; Description: Outputs information based on
; arguments provided for the necessary
; functions.
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 2.4"); 

 
const GREETING_LINE = "Hello, my name is ###!";
const DATE_TEMP_LINE = "Today\'s date is ### and the current temperature is %%%.";
const AGE_GOAL_LINE = "I am ### years old and my savings account goal is %%%.";
const NEW_LINE = "\n";

/**
 *  Takes a first and last names and returns a concatenated
 *  full name string.
 * @param {*} firstName 
 * @param {*} lastName
 */
function fullName( firstName, lastName ) {
    return firstName + " " + lastName;
}

/**
 *  Takes the year, month, and day as strings and returns
 *  a date object.
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 */
function dateWriter( year, month, day) {
    return new Date(day + month + year);
}

/**
 *  Accepts a number and a precision and returns a 
 *  formatted number.
 * @param {*} numberToFormat 
 * @param {*} decimalPostion 
 */
function formatNumber( numberToFormat, decimalPostion ) {
    return numberToFormat.toFixed( decimalPostion );
}

/**
 *  Takes a number in the form of a string and 
 *  returns the number as an integer.
 * @param {*} integerString 
 */
function convertToInt( integerString ) {
    return parseInt( integerString );
}

/**
 *  Takes a floating point number in the form of a
 *  string and returns the number as a float
 * @param {*} floatString 
 */
function convertToFloat( floatString ) {
    return parseFloat( floatString );
}

/**
 * The main function for the program.
 */
function main(){
    var firstLine = GREETING_LINE.replace( "###", fullName("Jared", "Brown") );
    
    var secondLine = DATE_TEMP_LINE.replace( "###", dateWriter("2017", "December",
        "10").toLocaleDateString() );
    secondLine = secondLine.replace( "%%%", formatNumber(27.23, 1) );

    var thirdLine = AGE_GOAL_LINE.replace( "###", convertToInt("20") );
    thirdLine = thirdLine.replace( "%%%", convertToFloat("948.43") );

    var printString = firstLine + NEW_LINE.repeat(2) + secondLine + 
        NEW_LINE.repeat(2) + thirdLine;

    console.log(headerMsg + NEW_LINE.repeat(2) + printString);    
}

main(); 