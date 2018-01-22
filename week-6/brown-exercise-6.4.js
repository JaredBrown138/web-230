/*
============================================
; Title:  Exercise 6.4
; Author: Professor Krasso, Jared Brown 
; Date:   21 January 2018
; Modified By: Jared Brown
; Description: Another lesson in Object Literals,
; this time with nested properties.
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 6.4");
console.log(headerMsg + "\n".repeat(2));

var ticket = {
    id: 34829348,
    name: "Joe Schmoe",
    dateCreated: "12/1/2017",
    priority: 1,
    personID: "392032d542f",
    person: {
        id: 2938424,
        firstName: "Jared",
        lastName: "Brown",
        jobTitle: "Support Staff Supervisor"
    },

    /**
     * The printSummary method logs a summary of the ticket. 
     */
    printSummary: function(){
        var prntString = "Ticket " + this.id + " was created on " + this.dateCreated +
        " and assigned to employee " + this.person.firstName + " " + this.person.lastName +
        " (" + this.person.jobTitle + ")."
        console.log(prntString);
    }
}
 ticket.printSummary();