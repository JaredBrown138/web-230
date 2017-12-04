/*
============================================
; Title:  Assignment 1.5
; Authors: Professor Krasso, Jared Brown
; Date:   3 December 2017
; Modified By: Jared Brown
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application to display
;   employee records.
;===========================================
*/ 
const NEW_LINE = "\n"
const FIRST_NAME_PREFIX = "First Name: ";
const MIDDLE_NAME_PREFIX = "Middle Name: ";
const LAST_NAME_PREFIX = "Last Name: ";
const ADDRESS_PREFIX = "Address: ";
const PAY_RATE_PREFIX = "Pay Rate: $";
const HIRE_DATE_PREFIX = "Hire Day: ";
const LINES_BETWEEN_RECORDS = 3;


var myFirstName = "Jared";
var myLastName = "Brown";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log(NEW_LINE); 

// start of program - your code goes below this line

var firstName0 = "Jared";
var middleName0 = "Allen";
var lastName0 = "Brown";
var address0 = "142 Grandview St Greenville, NY";
var payRate0 = 12.50;
var hireDate0 = new Date("January 4, 2015");

var recordString0 = "" + FIRST_NAME_PREFIX + firstName0 + NEW_LINE + MIDDLE_NAME_PREFIX + 
    middleName0 + NEW_LINE + LAST_NAME_PREFIX + lastName0 + NEW_LINE + ADDRESS_PREFIX +
    address0 + NEW_LINE + PAY_RATE_PREFIX + payRate0.toString() + NEW_LINE + HIRE_DATE_PREFIX + 
    hireDate0.toLocaleDateString();


var firstName1 = "Timothy";
var middleName1 = "Jackson";
var lastName1 = "Greene";
var address1 = "12 Oak St Ithica, NY";
var payRate1 = 11.35;
var hireDate1 = new Date("March 3, 2017");

var recordString1 = FIRST_NAME_PREFIX + firstName1 + NEW_LINE + MIDDLE_NAME_PREFIX + 
    middleName1 + NEW_LINE + LAST_NAME_PREFIX + lastName1 + NEW_LINE + ADDRESS_PREFIX +
    address1 + NEW_LINE + PAY_RATE_PREFIX + payRate1.toString() + NEW_LINE + HIRE_DATE_PREFIX + 
    hireDate1.toLocaleDateString();


var firstName2 = "Joshua";
var middleName2 = "B.";
var lastName2 = "Baker";
var address2 = "984 W. Thrid St. Salamanca, NY";
var payRate2 = 13.10;
var hireDate2 = new Date("March 26, 2017");

var recordString2 = FIRST_NAME_PREFIX + firstName2 + NEW_LINE + MIDDLE_NAME_PREFIX + 
    middleName2 + NEW_LINE + LAST_NAME_PREFIX + lastName2 + NEW_LINE + ADDRESS_PREFIX +
    address2 + NEW_LINE + PAY_RATE_PREFIX + payRate2.toString() + NEW_LINE + HIRE_DATE_PREFIX + 
    hireDate2.toLocaleDateString();
    

var firstName3 = "Jasmine";
var middleName3 = "Grace";
var lastName3 = "Corey";
var address3 = "32 Bay Ave Ashville, NY";
var payRate3 = 12.95;
var hireDate3 = new Date("December 14, 2016");

var recordString3 = FIRST_NAME_PREFIX + firstName3 + NEW_LINE + MIDDLE_NAME_PREFIX + 
    middleName3 + NEW_LINE + LAST_NAME_PREFIX + lastName3 + NEW_LINE + ADDRESS_PREFIX +
    address3 + NEW_LINE + PAY_RATE_PREFIX + payRate3.toString() + NEW_LINE + HIRE_DATE_PREFIX + 
    hireDate3.toLocaleDateString();
    

var firstName4 = "Adam";
var middleName4 = "Roger";
var lastName4 = "Mason";
var address4 = "456 Gordon St Bemus Point, NY";
var payRate4 = 13.60;
var hireDate4 = new Date("January 4, 2015");

var recordString4 = FIRST_NAME_PREFIX + firstName4 + NEW_LINE + MIDDLE_NAME_PREFIX + 
    middleName4 + NEW_LINE + LAST_NAME_PREFIX + lastName4 + NEW_LINE + ADDRESS_PREFIX +
    address4 + NEW_LINE + PAY_RATE_PREFIX + payRate4.toString() + NEW_LINE + HIRE_DATE_PREFIX + 
    hireDate4.toLocaleDateString();    

var recordPrintOut = recordString0 + NEW_LINE.repeat(LINES_BETWEEN_RECORDS) + recordString1 + 
    NEW_LINE.repeat(LINES_BETWEEN_RECORDS) + recordString2 + NEW_LINE.repeat(LINES_BETWEEN_RECORDS) + 
    recordString3 + NEW_LINE.repeat(LINES_BETWEEN_RECORDS) + recordString4;

console.log(recordPrintOut);    

