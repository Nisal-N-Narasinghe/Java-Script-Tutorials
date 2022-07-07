/*
Events in JavaScript

How to listn to events 
 > Throug HTML Attribute.
  E.g. <a onclick="doSomething();">Click Me</a>

  >addEventListener("event", function());
   E.g. element.addEventListener("click", function);

   Some of the most used Events in JavaScript
    * Click
    * mouseover
    * keyup
    * keydown
    * change
 */

var myButton = document.getElementById("btn2");
myButton.addEventListener("click", afterClick);

function afterClick() {
    alert("Button 2 was clicked");
}

//capture click event(clicked mouse button details)
function afterClick(event) {
    console.log(event);
}

//capture keyup event
document.addEventListener("keyup", function(event) {
    console.log(event);
})

//capture keyup code
document.addEventListener("keyup", function(event) {
    console.log(event.keyCode);
})