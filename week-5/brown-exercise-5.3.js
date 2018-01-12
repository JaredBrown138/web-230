/*
============================================
; Title:  Exercise 5.3
; Author: Professor Krasso, Jared Brown 
; Date:   12 January 2018
; Modified By: Jared Brown
; Description: Iterates through an array of composers
; and outputs the information in a neat manner.  
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 5.3");
console.log(headerMsg + "\n".repeat(2)); 

const LSTNAME = "Last Name: ";
const GENRE = ", Genre: ";
const RATING = ", Rating: ";

var famousComposers = [

    {
        firstName: "Wolfgang",
        lastName: "Mozart", 
        genre: "Classical", 
        rating: 10,
    },
    {
        firstName: "Ludwig",
        lastName: "Beethoven", 
        genre: "Classical", 
        rating: 8,
    },
    {
        firstName: "Johann",
        lastName: "Bach", 
        genre: "Classical", 
        rating: 9,
    },
    {
        firstName: "Joseph",
        lastName: "Haydn", 
        genre: "Classical", 
        rating: 6,
    },
    {
        firstName: "Franz",
        lastName: "Schubert", 
        genre: "Classical", 
        rating: 5,
    }
]

famousComposers.forEach(c =>{
    var printLine = LSTNAME + c.lastName + GENRE + c.genre + 
        RATING + c.rating;
    console.log(printLine);  
})