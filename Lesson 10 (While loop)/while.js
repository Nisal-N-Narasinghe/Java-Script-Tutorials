/*
While loop

Syntax - While loop                Syntax - Do While loop

while (true) {                     do {                                                                   
    //code                             //code
}                                  } while (true)
*/

//Creat array called months for store months
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var i = 0;

/*
//Display months using while loop
while (i < months.length) {
    document.write(i + 1 + ". " + months[i] + "<br>");
    i++;
}
*/

//Display months using do while loop
do {
    document.write(i + 1 + ". " + months[i] + "<br>");
    i++;
} while (i < months.length);