/*
Syntax:

for (start; condition; step) {
    // code to be repeated
}
*/

//Creat array called months for store months
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.write("<h2>Display months using normal method</h2>");
document.write(months[0] + "<br>");
document.write(months[1] + "<br>");
document.write(months[2] + "<br>");
document.write(months[3] + "<br>");
document.write(months[4] + "<br>");
document.write(months[5] + "<br>");
document.write(months[6] + "<br>");
document.write(months[7] + "<br>");
document.write(months[8] + "<br>");
document.write(months[9] + "<br>");
document.write(months[10] + "<br>");
document.write(months[11] + "<br>");


document.write("<h2>Display months using foor loop</h2>");
for (var i = 0; i < months.length; i++) {
    document.write(months[i] + "<br>");
}