/*
============================================
; Title:  Exercise 7.2
; Author: Professor Krasso, Jared Brown 
; Date:   28 January 2018
; Modified By: Jared Brown
; Description: A demonstration of constructor 
; functions. 
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 7.2");
console.log(headerMsg + "\n".repeat(2));

var header = require('../header.js');

/**
 * The constructor function for the
 * Employee object. Conatins a method
 * which returns a formatted string of
 * the objects properties
 * @param {*} id 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} title 
 */
function Employee(id, firstName, lastName, title){
    this.id = id;
    this.name = {
        first: firstName,
        last: lastName
    };
    this.title = title; 

    this.printRecord = function(){
        var d = " ";
        var printString = this.id + d + this.name.first + d + 
            this.name.last + d + this.title;
        console.log(printString);
    }
}

var company = [
    new Employee(1, "Thomas", "Edison", "Software Engineer"), 
    new Employee(2, "Benjamin", "Franklin", "Programmer"),
    new Employee(3, "Nikola", "Tesla", "Project Manager"),
    new Employee(4, "Charles", "Babbage", "Product Manager"),
    new Employee(5, "Alexander", "Bell", "Business Analyst")
]

company.forEach(v => {v.printRecord();});