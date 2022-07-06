/* 
//Testing js file connection
document.write("Hello");
*/

//Creating a newe array and store values in it
var cars = ["Toyota", "Nissan", "Suzuki", "Mazda"];
//console.log(cars);
document.write(cars);
//Print 3rd Item in car array
document.write("<br>" + cars[2]);

//Array Creating methods
var students = [];
var Vegitable = new Array("1", "Pumpking", "2", "Potato", "3", "Carrot");
//document.write("<br>" + Vegitable);

/* 
Arrays in JavaScript

Properties             Methods
 *length                *push()
                        *pop()
                        *shift()
                        *unshift()
                        *indexOf()
*/

var cars = ["Toyota", "Nissan", "Suzuki", "Mazda"];
//length of the cars array
document.write("<br>" + cars.length);


var students = ["Nisal"];
//Enter element at the end of students  array
students.push("Kamal");
//document.write("<br>" + students);

var cars = ["Toyota", "Nissan", "Suzuki", "Mazda"];
//Delete the last element from the cars array
cars.pop();
//document.write("<br>" + cars);

var cars = ["Toyota", "Nissan", "Suzuki", "Mazda"];
//Add a  new Element at the beginning of the cars array
cars.unshift("Tesla");
//document.write("<br>" + cars);

var cars = ["Toyota", "Nissan", "Suzuki", "Mazda"];
//Delete the first element of the cars array
cars.shift();
//document.write("<br>" + cars);

var cars = ["Toyota", "Nissan", "Suzuki", "Mazda"];
//Search the possession of a element from the cars array
document.write("<br>" + cars.indexOf("Toyota"));