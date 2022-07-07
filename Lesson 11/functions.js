//Creat function call printDate
function printDate() {
    document.write(Date()); //Use js inbuilt function call Date for get date and time
}

//Call function for Display Date and Time
printDate();

//Creat function to calculate amount
function billAmount(price, qty) {
    alert("Bill Amount: Rs" + price * qty);
}

var productPrice = (prompt("Enter product price : "));
var quantity = (prompt("Enter quantity : "));
//Pass productPrice and quantity to billAmount function and display the amount
billAmount(productPrice, quantity);