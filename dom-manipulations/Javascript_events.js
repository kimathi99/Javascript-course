// JavaScript Events - Explanation & Notes
// What are JavaScript Events?
// JavaScript events are actions that occur in the browser, which JavaScript can detect and respond to. Events are used to make web pages interactive, such as responding to user clicks, keystrokes, mouse movements, and other interactions.

// For example, when a user clicks a button, types in a text field, or moves the mouse over an element, an event is triggered.

// Types of JavaScript Events
// Events in JavaScript can be categorized into different types:

// Mouse Events

// click - When an element is clicked
// document.addEventListener('click',function(){
//     alert('I was clicked');
// })
//   document.getElementById("myButton").addEventListener("click", function() {
//         alert("Button Clicked!");
//     });
// dblclick - When an element is double-clicked
//document.addEventListener('dblclick',function(){
    //alert('I was  double clicked ');
//})
// mousedown - When a mouse button is pressed
// mouseup - When a mouse button is released
// mousemove - When the mouse moves over an element
// mouseover - When the mouse enters an element
document.addEventListener('mouseover',function(){
alert("The mouse is over this page now");
})
// mouseout - When the mouse leaves an element
document.addEventListener('mouseout', function(){
    alert('This is mouse out'); 
});

// Keyboard Events

// keydown - When a key is pressed
// keyup - When a key is released
// keypress (deprecated) - When a key is pressed and held
// Form Events

// submit - When a form is submitted
// change - When an input value changes
// focus - When an input field is focused
// blur - When an input field loses focus
// Window Events

// load - When the page fully loads
// resize - When the window is resized
// scroll - When the user scrolls the page
// Clipboard Events

// copy - When content is copied
// cut - When content is cut
// paste - When content is pasted
// Handling JavaScript Events
// JavaScript provides different ways to handle events:

// Inline Event Handling (Not recommended)
// You can add an event directly in the HTML element using the event attribute.

// <button onclick="alert('Button Clicked!')">Click Me</button>
// Using JavaScript Event Listener (Recommended)
// The addEventListener() method allows us to attach an event to an element.

// <button id="myButton">Click Me</button>

// <script>
    // document.getElementById("myButton").addEventListener("click", function() {
    //     alert("Button Clicked!");
    // });
// </script>
// Using JavaScript Property (Alternative approach)
// You can assign a function to the event property of an element.

// <button id="btn">Click Me</button>

// <script>
//     let btn = document.getElementById("btn");
//     btn.onclick = function() {
//         alert("Button Clicked!");
//     };
// </script>
// Example: Mouse & Keyboard Events
// <input type="text" id="nameInput" placeholder="Type your name">
// <button id="greetBtn">Greet</button>
// <p id="message"></p>

// <script>
//     document.getElementById("greetBtn").addEventListener("click", function() {
//         let name = document.getElementById("nameInput").value;
//         document.getElementById("message").textContent = "Hello, " + name + "!";
//     });

//     document.getElementById("nameInput").addEventListener("keyup", function(event) {
//         console.log("Key Pressed: " + event.key);
//     });
// </script>
// Explanation:

// When the button is clicked, it takes the input value and displays a greeting message.
// The keyup event logs every key pressed in the console.
// Example: Changing Background on Mouse Over
// <div id="box" style="width: 200px; height: 200px; background-color: lightblue; text-align: center; line-height: 200px;">
//    Hover Me!
// </div>

// <script>
//     let box = document.getElementById("box");

//     box.addEventListener("mouseover", function() {
//         box.style.backgroundColor = "yellow";
//     });

//     box.addEventListener("mouseout", function() {
//         box.style.backgroundColor = "lightblue";
//     });
// </script>
// Explanation:

// When the user hovers over the div, the background color changes.
// When the mouse leaves, it changes back to the original color.
// Conclusion
// JavaScript events allow web pages to respond to user actions.
// Events like click, keyup, mouseover, and submit help in making interactive websites.
// The recommended way to handle events is using addEventListener().