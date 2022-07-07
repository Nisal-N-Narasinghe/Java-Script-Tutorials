/*
if, else Statement

E.g.:-
if(condition) {
    //do this if condition true
} else {
    //do this if condition false
}

Short version of if, else Statement
(condition) ? true : false;
*/

/*
// If, else Statement
var marks = 75;

if (marks >= 70) {
    document.write("You are pass")
} else {
    document.write("You are fail")
}
*/

//Nested if
//Get student name
var name = prompt("Please enter your name: ");
//Get student mark
var mark = prompt("Please enter your mark: ");

if (mark >= 75) {
    alert(name + ", Your Grade is A");
} else if (mark >= 65) {
    alert(name + ", Your Grade is B");
} else if (mark >= 55) {
    alert(name + ", Your Grade is C");
} else if (mark >= 45) {
    alert(name + ", Your Grade is D");
} else {
    alert(name + ", You are failed");
}

/*
//Short version of if, else Statement
var age = 18;
(age >= 18) ? alert("You can face for the exam"): alert("You can't face for the exam");
*/