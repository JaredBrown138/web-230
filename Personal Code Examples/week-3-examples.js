/**
* Created by JaredBrown on 12/14/17.
*/



/* A while loop which should be a for loop */
var itemArray = ["Hello", "This", "is", "a", "test."];
var i = 0;
while( i < itemArray.length ){
   console.log(itemArray[i]);
   i += 1;
}


/* Much Better */
var itemArray2 = ["Hello", "This", "is", "a", "test."];
for( var j = 0; j < itemArray2.length; j++){
    console.log(itemArray2[j]);
}

/**
Output:

Hello
This
is
a
test.

**/

/* Several if-elesif statements which should be a switch statement */
var importantNumber = 25;
if( importantNumber == "twenty-five" ){
    console.log("Not it");
}
else if( importantNumber == 34 ){
    console.log("Not it");
}
else if( importantNumber == 19.99 ){
    console.log("Not it");
}
else if( importantNumber == 25 ){
    console.log("You should be seeing this");
}
else{
    console.log("Something really went wrong!");
}


/* A much cleaner switch statement */
var importantNumber2 = 25;
switch (importantNumber2){
    case "25":
        console.log("Not it"); //Remember switches use strict equality comparison
        break;
    case 34:
        console.log("Not it");
        break
    case 19.99:
        console.log("Not it");
        break;
    case 25:
        console.log("You should be seeing this");
        break;
    default:
        console.log("Something really went wrong!");
        break;        
}

/* A simple conditional statement which should be an if statement */

var boolFlag = true;
switch(boolFlag){
    case true:
        console.log("It is indeed true.");
}

/* Simpler and more concise if statement of the above example */

var boolFlag2 = true;
if(boolFlag2 == true)
    console.log("It is indeed true.");