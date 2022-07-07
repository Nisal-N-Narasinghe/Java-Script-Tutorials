//-----Creat function call printDate------
function printDate() {
    document.write(Date()); //Use js inbuilt function call Date for get date and time
}

//Call function for Display Date and Time
printDate();


//------Creat function to calculate amount-----
//;



var fname = "Nisal";

function printName(name) {
    var fname = "Narasinghe"; //Valid only for inner function
    document.write("<br> My name: " + name);
    document.write("<br> My name: " + fname);

}

printName(fname);
document.write("<br> My name: " + fname);