document.write("<h2>Arithmatic Operators</h2>");

document.write("<br>5 + 4  = ", 5 + 4);
document.write("<br>6 - 2  = ", 6 - 2);
document.write("<br>3 * 4  = ", 3 * 4);
document.write("<br>10 / 5 = ", 10 / 5);
document.write("<br>6 % 4  = ", 6 % 4);
document.write("<br><br>");


document.write("<br>Return value and increment");
//Return value and increment
var x = 1;
document.write("<br>", x++);
document.write("<br>", x);

document.write("<br>Increment and return value");
//Increment and return value
var x = 1;
document.write("<br>", ++x);

//line spacing
document.write("<br><br>");

document.write("<br>Return value and Decrement");
//Return value and decrement
var x = 3;
document.write("<br>", x--);
document.write("<br>", x);

document.write("<br>Decrement and return value");
//Decrement and return value
var x = 3;
document.write("<br>", --x);

//line spacing
document.write("<br><br>");

//Creating a tables for showing types of Arithmatic operators
document.write("<table border='2' cellspacing='0' cellpadding='6'>",
    "<tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>",
    "<tr><td>+</td><td>Addition</td><td>5+4</td><td>9</td></tr>",
    "<tr><td>-</td><td>Substraction</td><td>6-2</td><td>2</td></tr>",
    "<tr><td>*</td><td>Multiplication</td><td>3*4</td><td>12</td></tr>",
    "<tr><td>/</td><td>Division</td><td>10/5</td><td>2</td></tr>",
    "<tr><td>%</td><td>Modulus</td><td>6%4</td><td>2</td></tr>",
    "<tr><td rowspan='2' >++</td><td>Return value and increment</td><td>x = 1; x++</td><td>Firstly retun 1 and secondly return 1+1 value </td></tr>",
    "<tr><td>Increment and return value</td><td>x = 1; ++x</td><td>Return 1+1 value</td></tr>",
    "<tr><td rowspan='2'>--</td><td>Return value and decrement</td><td>x = 3; x--</td><td>Firstly retun 3 and secondly return 3-1 value</td></tr>",
    "<tr><td>Decrement and return value</td><td>x = 3; --x</td><td>Return 3-1 value</td></tr>",
    "</table><br><br>"
);

document.write("<h2>Comparison Operators</h2>");

var firstName = "Nisal";
document.write("<br>firstName == 'Nisal' :- ", firstName == 'Nisal');

var age = 22;
document.write("<br>age  != 24 :- ", age != 24);

var marks = 70;
document.write("<br>marks > 80 :- ", marks > 80);
document.write("<br>marks >= 80 :- ", marks >= 80);
document.write("<br>marks < 75 :- ", marks < 75);
document.write("<br>marks <= 35 :- ", marks <= 35);

document.write("<br><br>");

//Creating a tables for showing types of Comparion operators
document.write("<table border='2' cellspacing='0' cellpadding='6'>",
    "<tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>",
    "<tr><td>==</td><td>Equal</td><td>7=7</td><td>true</td></tr>",
    "<tr><td>!=</td><td>Not equal</td><td>6!=2</td><td>true</td></tr>",
    "<tr><td><</td><td>Less than</td><td>6<4</td><td>false</td></tr>",
    "<tr><td><=</td><td>Less than or equal</td><td>8<=10</td><td>true</td></tr>",
    "<tr><td>></td><td>Greater than</td><td>5>3</td><td>true</td></tr>",
    "<tr><td>>=</td><td>Greater than or equal</td><td>5>=6</td><td>false</td></tr>",
    "</table><br><br>"
);

document.write("<h2>Logical Operators</h2>");

var maths = "50";
var english = "80";
document.write("<br>maths > 40 && english > 60 :- ", maths > 40 && english > 60);

var maths = "50";
var english = "80";
document.write("<br>maths > 40 || english < 60 :- ", maths > 40 || english < 60);


document.write("<br>!true :- ", !true);


document.write("<br><br>");

//Creating a tables for showing types of Logical operators
document.write("<table border='2' cellspacing='0' cellpadding='6'>",
    "<tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>",
    "<tr><td rowspan='2'>&&</td><td rowspan='2'>AND :- Both conditions must be true in order to be true</td><td>true && true</td><td>true</td></tr>",
    "<tr><td>true && false</td><td>false</td></tr>",
    "<tr><td rowspan='3'>||</td><td rowspan='3'>OR :- At least one condition should be true in order to be true</td><td>true || true</td><td>true</td></tr>",
    "<tr><td>true || false</td><td>true</td></tr>",
    "<tr><td>false || false</td><td>false</td></tr>",
    "<tr><td rowspan='2'>!</td><td rowspan='2'>NOT :- The condition must be false in order to be true</td><td>!true</td><td>false</td></tr>",
    "<tr><td>!false</td><td>true</td></tr>",
    "</table><br><br>"
);

document.write("<h2>String Concatenation</h2>");

document.write("<br>'Nisal' + 'Nirmitha' :- ", 'Nisal' + 'Nirmitha');
document.write("<br>'Hello ' + 'World' :- ", 'Hello ' + 'World');
document.write("<br>5 + '5' :- ", 5 + '5');

document.write("<br><br>");

//Creating a tables for showing String Concatenation
document.write("<table border='2' cellspacing='0' cellpadding='6'>",
    "<tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>",
    "<tr><td rowspan='3'>+</td><td rowspan='3'>Join two strings together</td><td>'Nisal' + 'Nirmitha'</td><td>NisalNirmitha</td></tr>",
    "<tr><td>'Hello '+'World'</td><td>Hello World</td></tr>",
    "<tr><td>5 + '5'</td><td>55</td></tr>",
    "</table><br><br>"
);