/**
 * Author: Jared Brown
 * Created: January 17, 2018
 * Comments: A collection of examples for
 * week 6 of WEB-230.
 */

 function Bread(){
     this.density = 5,
     this.crustThickness = 3,
     this.hasSeeds = false,
     this.length = 12,
     this.hasBeenConsumed = false;

     this.consume = function(){
         this.hasBeenConsumed = true;
         console.log("A loaf of bread has been consumed");
     }
 }

var breadStand = new Array(100);
breadStand.fill(new Bread(), 0, 99);

console.log(breadStand);

Bread.prototype.chocolateChips = true;

breadStand.forEach((v, i, a) => {console.log(a[i].chocolateChips)} );

function ChocBread(){
    Bread.call(this); //call bread constructor
}
ChocBread.prototype = Object.create(Bread.prototype);//Inherit from Bread
ChocBread.prototype.constructor = ChocBread;//Point back to the right constructor

var chocBreadStand = new Array(10);
chocBreadStand.fill(new ChocBread(), 0, 9);

chocBreadStand.forEach((v, i, a) => {console.log(a[i].length)})
//Output: 12 (10 times)

ChocBread.prototype.chocolateDensity = 23;

Bread.prototype.weight = 19;
chocBreadStand.forEach((v, i, a) => {console.log(a[i].weight)})
//Outputs 19 (10 times)