 /**
 * Author: Jared Brown
 * Created: January 17, 2018
 * Comments: A collection of examples for
 * week 6 of WEB-230.
 */

var prefixes = Object.create(null);
prefixes = {
    newLine: "\n",
    firstName: "First Name: ",
    middleName: "Middle Name: ",
    lastName: "Last Name: ",
    address: "Address: ",
    payRate: "Pay Rate: ",
    hireDate: "Hire Date: ",
    linesBetween: 3
}

function Employee(firstName, middleName, lastName, 
    address, payRate, hireDate){
   
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.address = address;
    this.payRate = payRate;
    this.hireDate = hireDate;
}

Employee.prototype.output = function(){
    var keys = Object.keys(this);
    keys.forEach(key => {
        if(!(typeof this[key] === "function")){
            console.log( prefixes[key] + this[key] );
        }
    });      
}
var company = [] //Create empty Array
company.push(
    new Employee("Frank", "Allen", "Girts", "12 Sicamore St Greenville, NY",
    14.5, new Date("March 23, 2015").toLocaleDateString()),
    new Employee("Timothy", "Jackson", "Greene", "12 Oak St Ithica, NY",
    14.5, new Date("March 23, 2015").toLocaleDateString()),
    new Employee("Joshua", "B.", "Baker", "984 W Third St Salamanca, NY",
    14.0, new Date("June 20, 2016").toLocaleDateString()),
    new Employee("Jasmine", "Grace", "Corey", "32 Bay Ave Ashville, NY",
    13.5, new Date("December 14, 2016").toLocaleDateString()),
    new Employee("Adam", "Roger", "Mason", "456 Gordon St. Bemus Point, NY",
    13.0, new Date("March 2, 2017").toLocaleDateString())
);
company.forEach((v, i, a) => {console.log(a[i].output() + prefixes.newLine);});
   
    