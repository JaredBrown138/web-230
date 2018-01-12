/**
 * Author: Jared Brown
 * Created: January 11, 2018
 * Comments: A collection of examples for
 * week 5 of WEB-230.
 */

 const SEPERATOR = "\n --- House Facts --- \n";
 var car = {
     doors: 2,
     hp: 280,
     color: "Orange"
 }
 console.log( car["doors"] );
 /**
  Note: Key-Value pairs make up object properties which
  means you can reference them as such using either 
  bracket (above) or dot notation (below).
*/     
 console.log( car.doors );

 var carArray = [ 2, 280, "Orange"];
 console.log(carArray[0]);

 console.log(SEPERATOR);

var houseFacts = {
    area: 1800,
    color: "Dark Blue",
    basement: true,
    stories: 2,
    bathrooms: 1.5,
    backyard: true,
    yardArea: 1.2,

    prettyPrint: function(){
        var keys = Object.keys(this);
        keys.forEach(key => {
            if(!(typeof this[key] === "function")){
                console.log( key + ": " + this[key] );
            }
        });
    }
}
houseFacts.prettyPrint();


