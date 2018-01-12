/*
============================================
; Title:  Exercise 5.4
; Author: Professor Krasso, Jared Brown 
; Date:   12 January 2018
; Modified By: Jared Brown
; Description: Iterates through an array of composers
; and outputs the information in a neat manner.  
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 5.4");
console.log(headerMsg + "\n".repeat(2)); 

const COMPOSER = "Composer: ";
const RATING = "Rating: ";
const GENRE = "Genre: ";
const NEWLINE = "\n";
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

var composersByRating = famousComposers.map(function(composer) {
    return {rating: composer.rating, lastName: composer.lastName}
});

var composersByGenre = famousComposers.map(function(composer) {
    return {genre: composer.genre, lastName: composer.lastName}
});

console.log("-- COMPOSER BY RATING --");
composersByRating.forEach(c =>{
    var printString =  RATING + c.rating + NEWLINE + COMPOSER + c.lastName +
        NEWLINE.repeat(2);
    console.log(printString); 
});

console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(c =>{
    var printString =  GENRE + c.genre + NEWLINE + COMPOSER + c.lastName +
        NEWLINE.repeat(2);
    console.log(printString); 
});