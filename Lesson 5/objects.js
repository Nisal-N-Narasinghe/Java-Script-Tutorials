/*
Object in JavaScript

E.g.: student object
 > Properties
  * Student Id
  * First Name
  * Last Name
  * Age
  * Email

 >Methods
  *displayGPA()    
*/

//Object creating methods
var student1 = new Object();
var student2 = {};

//Creating a object and creating properties and methods
var student = {
    studentId: 1235,
    firstName: "Nisal",
    lastName: "Narasinghe",
    age: 22,
    email: "nisal@gmail.com",
    displayGPA: function() { alert("GPA = 3.7"); }
};
//display student age
document.write("<br/>" + student.firstName);

var cars = {};
//Insert properties for empty object cars
cars.brand = "Toyota";
//document.write("<br/>" + cars.brand);

var animal = {};
//Insert properties for empty object cars
animal.sounds = function() { alert("meow"); };
//document.write("<br/>" + animal.sounds());