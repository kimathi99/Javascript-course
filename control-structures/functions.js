// Day 3: Functions and Scope
// 🔹 Notes on JavaScript Functions
// A function in JavaScript is a reusable block of code designed to perform a specific task. Functions help make your code modular and avoid repetition.

// 1️⃣ Function Declaration (Named Function)
// A function can be declared using the function keyword:
 
// function doingsomething (a){
//     let b=a;
// return  b
// }

// in programming  a fuction takes in parameters
function greet(name) {
    return `Hello, ${name}! 👋`;
}

// Invoking the function
console.log(greet("Alice")); // Output: Hello, Alice! 👋
// 💡 Explanation:

// The function greet takes a parameter name and returns a greeting message.
// The function is called using greet("Alice").
// 2️⃣ Function Expression (Anonymous Function)
// A function can also be assigned to a variable:

const  greet2=function(name){
    console.log(name,'this is in the function');
    return `hello ,${name}` 
}
console.log(greet2('Nafraz'));
// const add = function (a, b) {
//     return a + b;
// };

// console.log(add(5, 3)); // Output: 8
// 💡 Explanation:

// The function does not have a name and is stored in a variable add.
// It is invoked using add(5, 3).
// 3️⃣ Arrow Function (Modern Syntax)
// A shorter way to write functions:
const  addition=(a,b)=> a +b;

console.log(addition(10,2));

// function addition2(a,b){
//     return  a=b
// }
// const multiply = (x, y) => x * y;

// console.log(multiply(4, 2)); // Output: 8
// 💡 Explanation:

// Uses => (arrow notation) to define a function.
// No need for return if the function has only one statement.
// 4️⃣ Function with User Input (Prompt)
function getAge() {
    let age = prompt("Enter your age:");
    if (age >= 18) {
        alert("✅ You are an adult.");
    } else {
        alert("❌ You are a minor.");
    }
}
getAge();

// // Calling the function
// getAge();
// 💡 Explanation:

// prompt() asks the user to enter their age.
// The function checks if the age is >= 18 and prints a message accordingly.
// 🔹 Function Scope
// Global Scope: Variables declared outside a function are accessible anywhere.
// Local Scope: Variables declared inside a function can only be used inside it.
// let globalVar = "I am global";

// function example() {
//     let localVar = "I am local";
//     console.log(globalVar); // ✅ Accessible
//     console.log(localVar);  // ✅ Accessible
// }

// example();
// console.log(globalVar); // ✅ Accessible
// console.log(localVar);  // ❌ Error (localVar is not defined)
// 📝 Exercise: Implement a Function Using User Input
// Scenario:
// Write a program that asks the user for a number, then:

// If the number is even, print "✅ The number is even."
// If the number is odd, print "❌ The number is odd."
// 🔽 Try writing this function before checking the answer below!

// 🔹 Example Solution
// function checkEvenOdd() {
//     let number = prompt("Enter a number:");
//     number = Number(number); // Convert input to a number

//     if (number % 2 === 0) {
//         console.log("✅ The number is even.");
//     } else {
//         console.log("❌ The number is odd.");
//     }
// }

// // Calling the function
// checkEvenOdd();
// 💡 Additional Challenge
// Write a function that asks the user for a number and prints its multiplication table (1 to 10).
// Write a function that asks for the user’s name and prints "Hello, [name]!" using an arrow function.
