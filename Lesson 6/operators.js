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

//Creating a tables for showing types of operators
document.write("<table border='2' cellspacing='0' cellpadding='6'>",
    "<tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr>",
    "<tr><td>+</td><td>Addition</td><td>5+4</td><td>9</td></tr>",
    "<tr><td>-</td><td>Substraction</td><td>6-2</td><td>2</td></tr>",
    "<tr><td>*</td><td>Multiplication</td><td>3*4</td><td>12</td></tr>",
    "<tr><td>/</td><td>Division</td><td>10/5</td><td>2</td></tr>",
    "<tr><td>%</td><td>Modulus</td><td>6%4</td><td>2</td></tr>",
    "<tr><td>++</td><td>Return value and increment</td><td>x = 1; x++</td><td>Firstly retun 1 and secondly return 1+1 value </td></tr>",
    "<tr><td>++</td><td>Increment and return value</td><td>x = 1; ++x</td><td>Return 1+1 value</td></tr>",
    "<tr><td>--</td><td>Return value and decrement</td><td>x = 3; x--</td><td>Firstly retun 3 and secondly return 3-1 value</td></tr>",
    "<tr><td>--</td><td>Decrement and return value</td><td>x = 3; --x</td><td>Return 3-1 value</td></tr>",
    "</table>"
);