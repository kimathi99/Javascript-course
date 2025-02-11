// Install TypeScript Globally
// To install TypeScript globally, run the following command in your terminal or command prompt:

// bash

// Verify
// Copy code
// npm install -g typescript
// Step 4: Verify the Installation
// After the installation is complete, you can verify that TypeScript has been installed correctly by checking the version. Run the following command:

// bash

// Verify
// Copy code
// tsc -v
// This command should output the version number of TypeScript, indicating that it has been successfully installed.

// Step 5: Create a TypeScript File
// You can now create a TypeScript file (e.g., example.ts) and start writing TypeScript code.

// Step 6: Compile TypeScript to JavaScript
// To compile your TypeScript file to JavaScript, use the following command:

// bash

// Verify
// Copy code
// tsc example.ts
// This will generate a JavaScript file (e.g., example.js) in the same directory.

// Summary
// Install Node.js if you haven't already.
// Open your terminal or command prompt.
// Run npm install -g typescript to install TypeScript globally.
// Verify the installation with tsc -v.
// Create a .ts file and compile it using tsc filename.ts.

// Part 1: Understanding Hoisting in JavaScript
// What is Hoisting? Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code.

// Real-Life Example of Hoisting: Imagine you are in a classroom where the teacher (the JavaScript engine) is preparing for a lesson. Before the lesson starts, the teacher writes down the names of all the students (variables and functions) on the board, even if they haven't arrived yet. When the lesson begins, the teacher can call on any student, regardless of whether they are physically present in the classroom.

// Code Example:

// javascript

// Verify
// Copy code
// console.log(myVar); // Output: undefined
// var myVar = 5;
// console.log(myVar); // Output: 5

// myFunction(); // Output: "Hello, World!"
// function myFunction() {
//     console.log("Hello, World!");
// }
// Explanation:

// The first console.log(myVar) outputs undefined because myVar is hoisted but not initialized.
// After the declaration, myVar is assigned the value 5, and the second console.log(myVar) outputs 5.
// The function myFunction can be called before its declaration because function declarations are hoisted completely.
// Part 2: Understanding the Window Object
// What is the Window Object? The window object represents the browser's window and is the global object in a web browser environment. It provides access to the browser's features, such as the document, history, and location.

// Real-Life Example of the Window Object: Think of the window object as the entire room where a meeting is taking place. The room contains various items (like a whiteboard, projector, etc.) that you can interact with. Similarly, the window object contains properties and methods that allow you to interact with the browser.

// Code Example:

// javascript

// Verify
// Copy code
// // Accessing the window object
// console.log(window.innerWidth); // Outputs the width of the browser window
// console.log(window.innerHeight); // Outputs the height of the browser window

// // Using a method from the window object
// window.alert("Welcome to the website!"); // Displays an alert box
// Part 3: Introduction to TypeScript
// What is TypeScript? TypeScript is a superset of JavaScript that adds static typing to the language. It helps developers catch errors early through type checking and provides better tooling and IDE support.

// Benefits of TypeScript over JavaScript:

// Static Typing: Helps catch errors at compile time rather than runtime.
// Improved Readability: Makes code easier to understand and maintain.
// Better Tooling: Enhanced autocompletion and refactoring capabilities in IDEs.
// Part 4: Setting Up TypeScript
// Install TypeScript: You can install TypeScript globally using npm:

// bash

// Verify
// Copy code
// npm install -g typescript
// Create a TypeScript File: Create a file named example.ts.

// Compile TypeScript to JavaScript: Use the TypeScript compiler to compile your TypeScript code:

// bash

// Verify
// Copy code
// tsc example.ts
// Part 5: Basic Types and Interfaces in TypeScript
// Basic Types: TypeScript provides several basic types, including:

// number
// string
// boolean
// any
// void
// Real-Life Example of Basic Types:

// typescript

// Verify
// Copy code
// let age: number = 30; // Age is a number
// let name: string = "Alice"; // Name is a string
// let isStudent: boolean = true; // Is a student or not
// Interfaces: Interfaces in TypeScript define the structure of an object. They are useful for type-checking and ensuring that objects adhere to a specific shape.

// Real-Life Example of Interfaces:

// typescript

// Verify
// Copy code
// interface Person {
//     name: string;
//     age: number;
// }

// const student: Person = {
//     name: "Bob",
//     age: 25
// };

// console.log(student.name); // Output: Bob
// Conclusion