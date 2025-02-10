// DOM Manipulation - Explanation & Notes
// What is the DOM?
// The Document Object Model (DOM) is a structured representation of the HTML document. It allows JavaScript to access and manipulate elements, styles, and content dynamically.

// Whenever a web page is loaded, the browser creates a DOM tree, where each HTML element becomes a node that JavaScript can interact with.

// Why Use DOM Manipulation?
// DOM manipulation is essential because it helps in:

// Updating content dynamically without refreshing the page.
// Changing the styles (CSS) of elements.
// Adding or removing HTML elements.
// Responding to user interactions like clicks and keypresses.
// Selecting Elements in the DOM
// JavaScript provides different ways to select HTML elements for manipulation:

// Using getElementById() (Selects an element by its id)
// document.getElementById("clickButton").addEventListener('dblclick',function(){
//     alert('I was  double clicked ');
// })
// let  button=document.getElementById("clickButton");
// console.log(button);
// let heading = document.getElementById("title");
// console.log(heading.innerText);
// Using getElementsByClassName() (Selects multiple elements by class)
let  LearningButton=document.getElementsByClassName("learning-button");

//using class name

console.log(LearningButton[0].innerHTML);
// let items = document.getElementsByClassName("list-item");
// console.log(items[0].innerText);
// Using getElementsByTagName() (Selects elements by tag name)

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs[0].innerText);
// Using querySelector() (Selects the first matching element)

// let firstItem = document.querySelector(".list-item");
// console.log(firstItem.innerText);
// getting the first elemt use queryselector
document.querySelector("#title");  //  using # is for the id
document.querySelector(".title");  //. fullstop is for the class name
 
// Using querySelectorAll() (Selects all matching elements)
// and use the same  symbol # . (same use case   for the querySelector)

// let allItems = document.querySelectorAll(".list-item");
// allItems.forEach(item => console.log(item.innerText));
// Manipulating Elements
// Changing Text Content

// let heading = document.getElementById("title");
// heading.innerText = "Welcome to DOM Manipulation!";
// Changing HTML Content

// let content = document.getElementById("info");
// content.innerHTML = "<strong>New Content Here!</strong>";
// Changing Styles
let button=document.querySelector('#clickButton');
button.addEventListener('click',function(){
    if(button.style.backgroundColor=='blue'){
        button.style.backgroundColor='red'; 
    }else{
        button.style.backgroundColor='blue'; 
    }

});
// let box = document.getElementById("box");
// box.style.backgroundColor = "blue";
// box.style.color = "white";
// Adding a New Element




// let newItem = document.createElement("li");
// newItem.innerText = "New List Item";
// document.getElementById("myList").appendChild(newItem);
// Removing an Element

// let itemToRemove = document.getElementById("removeMe");
// itemToRemove.remove();
// Handling Events with DOM
// JavaScript allows us to respond to user actions by using event listeners.

// Adding an Event Listener

// document.getElementById("btn").addEventListener("click", function() {
//     alert("Button Clicked!");
// });
// Handling Mouse Hover Events

// document.getElementById("box").addEventListener("mouseover", function() {
//     this.style.backgroundColor = "red";
// });
