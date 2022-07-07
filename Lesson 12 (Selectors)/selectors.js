/*
Selectors in JavaScript

Helps us access and change DOM(Document Object Model) 
> getElementById(""idname)
> getElementsByClassName("classname") - array 
> getElementByTagName("<tagname>") - array
> querySelectorAll("#idname") - array
> querySelectorAll(".classname") - array
> querySelectorAll("tagname") - array
*/

//Change main heading by using id
var mainHeading = document.getElementById("main-heading");
mainHeading.innerText = "DOM(Document Object Model";

//Change the odd rows in the table by using classname
var oddRows = document.getElementsByClassName("odd");
oddRows[0].style.background = "yellow";
oddRows[1].style.background = "red";
oddRows[2].style.background = "green";

//Change the even rows in the table by using classname
var evenRows = document.getElementsByClassName("even");
for (var i = 0; i < evenRows.length; i++) {
    evenRows[i].style.background = "blue";
}

//Change all h2 tag font colours by using tagname
var subHeadings = document.getElementsByTagName("h2");
for (var i = 0; i < subHeadings.length; i++) {
    subHeadings[i].style.color = "red";
}

//Add new item to list by using quary selector
var list = document.querySelectorAll(".list");
list[0].innerHTML = list[0].innerHTML + "<li> List Item 4 </li>";