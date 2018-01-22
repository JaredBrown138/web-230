/*
============================================
; Title:  Exercise 6.3
; Author: Professor Krasso, Jared Brown 
; Date:   21 January 2018
; Modified By: Jared Brown
; Description: A lesson in Object Literals.
;===========================================
*/ 
var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 6.3");
console.log(headerMsg + "\n".repeat(2));

var ticket = {
    id: 34829348,
    name: "Joe Schmoe",
    requester: "User - 392032d542f",

    /**
     * The print method logs the id, name, and requester
     * properties of the ticket object when called. 
     */
    print: function(){
        var prntString = "id: " + this.id + ", name: " + this.name +
        ", requester: " + this.requester; 
        console.log(prntString);
    }
}
 ticket.print();