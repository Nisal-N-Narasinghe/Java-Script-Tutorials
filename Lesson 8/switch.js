/*
Difference between if, else Statement and switch statement.

var name = prompt("Please enter your name: ");                   var name = prompt("Please enter your name: ");        
var mark = prompt("Please enter your mark: ");                   var mark = prompt("Please enter your mark: ");

if (mark >= 75) {                                                 switch (true) {
    alert(name + ", Your Grade is A");                                    case (mark >= 75) :
} else if (mark >= 65) {                                                        alert(name + ", Your Grade is A")
    alert(name + ", Your Grade is B");                                        break;
} else if (mark >= 55) {                                                   case (mark >= 65) :
    alert(name + ", Your Grade is C");           ------- >                      alert(name + ", Your Grade is B")   
} else if (mark >= 45) {                         ------- >                    break; 
    alert(name + ", Your Grade is D");           ------- >                 case (mark >= 55) :
} else {                                                                        alert(name + ", Your Grade is C")
    alert(name + ", You are failed");                                         break; 
}                                                                           case (mark >= 45) :
                                                                                alert(name + ", Your Grade is D")
                                                                              break;
                                                                            default:
                                                                                alert(name + ", You are failed")
                                                                    }          
*/

/*
//Example for switch statement
var mark = 65;
switch (true) {
    case (mark >= 75):
        alert("Your grade is A")
        break;
    case (mark >= 65):
        alert("Your grade is B")
        break;
    case (mark >= 55):
        alert("Your grade is C")
        break;
    case (mark >= 45):
        alert("Your grade is D")
        break;
    default:
        alert("You are failed")
}
*/
//Simple code for display user entered day number is week day or weekend day
var dayOfWeek = parseInt(prompt('Please enter the day number: ')); //use parseInt for capture use entered value as integer value

switch (dayOfWeek) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        document.write("This is a week day");
        break;
    case 6:
    case 7:
        document.write("This is a weekend day");
        break;
    default:
        document.write("Invalid Input !!!!");
}