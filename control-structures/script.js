
//Data Types
// var: The most commonly used variable in JavaScript is var. It can be redeclared
// and its value can be reassigned, but only inside the context of a function. When
// the JavaScript code is run, variables defined using var are moved to the top. An
// example of a variable declared using the "var" keyword in JavaScript is shown
// below:
// var x = 140; //
// variable x can be reassigned a new value and also redeclared
// const: const variables in JavaScript cannot be used before they appear in the
// code. They can neither be reassigned values, that is, their value remains fixed
// throughout the execution of the code, nor can they be redeclared. An example
// of a variable declared using the "const" keyword in JavaScript is shown below:
// const x = 5; // variable x cannot be reassigned a new value or redeclared
// let: The let variable, like const, cannot be redeclared. But they can be reassigned
// a value. An example of a variable declared using the "let" keyword in JavaScript
// is shown below:



// Numbers: These are just numerical values. They can be real numbers or integers.
// An example of the numbers data type is shown below: var id = 100
// Variables: The variable data type, as the name suggests, does not have a fixed
// value. An example of the variables data type is shown below: var y
// Text (strings): String data types of JavaScript are a combination of multiple
// characters. An example of the string data type is shown below: var demoString =
// "Hello World"
// Operations: Operations in JavaScript can also be assigned to JavaScript
// variables. An example of these is shown below: var sum = 20 + 30 + 29
// Boolean values: Boolean values can be true or false. An example of the boolean
// data type is shown below: var booleanValue = true
// Constant numbers: As the name suggests, these data types have a fixed value. An
// example of the constant data type is shown below: const g = 9.8
// Objects: JavaScript objects are containers for named values called properties.
// They possess their own data members and methods. An example of the objects
// data type is shown below:
// var name = {name:"Jon Snow", id:"AS123"}


// Fundamental Operators: These operators are used to perform basic operations
// like addition, multiplication, etc. in JavaScript. A list of all the Fundamental
// operators in JavaScript is as follows:
// +: The Addition Operator is used to add two numbers
// -: The Subtraction Operator is used to subtract two numbers
// *: The MultiplicationOperator is used to multiply two numbers
// /: The Division Operator is used to divide two numbers
// (...): In general, operations within brackets are executed earlier than that
// outside. This grouping operator surrounds an expression or sub-expression
// with a pair of parentheses to override the conventional operator
// precedence, allowing operators with lower precedence to be evaluated
// before operators with higher precedence. It does exactly what it says: it
// groups the contents of the parentheses.
// %: The Modulus operator is used to get the remainder when an integer
// number is divided by another integer number.
// ++: The Increment operator is used to increase the value of numbers by
// one.
// --: The Decrement operator is used to decrease the value of numbers by
// one.
// Bitwise Operators: All the operations dealing with the bits of the numbers can
// be performed by the bitwise operators in JavaScript. A list of all the Bitwise
// operators in JavaScript is as follows:
// &: The bitwise AND operator returns a 1 in every bit position where both
// operands' corresponding bits are 1.
// |: The bitwise OR operator (|) returns a 1 in each bit position where either or
// both operands' corresponding bits are 1.
// ~: The bitwise NOT operator reverses the operand's bits. It turns the
// operand into a 32-bit signed integer, just like other bitwise operators.
// ^: The bitwise XOR operator () returns a 1 in each bit position where the
// corresponding bits of both operands are 1s but not both.
// <<: The le shi operator shi s the first operand to the le by the provided
// number of bits. Extra bits that have been relocated to the le are discarded.
// From the right, zero bits are shi ed in.
// >>: The right shi operator (>>) moves the first operand to the right by the
// provided number of bits. Extra bits that have been relocated to the right are
// discarded. The le most bit's copies are shi ed in from the le . The sign bit
// (the le most bit) does not change since the new le most bit has the same

// Day     2

// JavaScript If-Else Statements
// The if-else statements are simple to comprehend. You can use them to set conditions
// for when your code runs. If specific requirements are met, something is done; if they
// are not met, another action is taken. The switch statement is a concept that is
// comparable to if-else. The switch however allows you to choose which of several
// code blocks to run. The syntax of if-else statements in JavaScript is given below:

let requiredAge =4; //  declared 
let sampleAge=6;
// outline 
//  (---condition---){
// ---operation that based on the condition
//  }

// statements
// control  structures
 
// when we use operators  they  give  a value 
// this value can either be a number , a string  (alphanumerics ) or  boolean 

if (sampleAge <requiredAge ){
    console.log("You have not  reached the correct Age");
    alert('You have not  reached the correct Age');
}else{
    console.log("You can join School");
    alert('You can join school');
}
// exercise
// let age = 18;

// if (age >= 18) {
//     console.log("✅ You are eligible to vote.");
// } else {
//     console.log("❌ You are not eligible to vote.");
// }




// if (check condition) {
// // block of code to be executed if the given condition is satisfied
// } else {
// // block of code to be executed if the given condition is not satisfied
// }
// Loops in JavaScript:
// Most programming languages include loops. They let you run code blocks as many
// times as you like with diﬀerent values. Loops can be created in a variety of ways in
// JavaScript:
// the for loop: The most frequent method of creating a loop in JavaScript. Its
// syntax is shown below:
// for (initialization of the loop variable; condition checking for the loop; updation aft
// // code to be executed in loop
// }

// looping exercise
// for (let i = 1; i <= 5; i++) {
//     console.log("🔢 Number:", i);
// }


// the while loop: Establishes the conditions under which a loop will run. Its syntax
// is shown below:
// // Initialization of the loop variable is done before the while loop begins
// while(condition checking for the loop){
// // 1. code to be executed in loop
// // 2. updation of the loop variable
// }

// while loop exercise
// let count = 1;
// while (count <= 3) {
//     console.log("⏳ Counting:", count);
//     count++; // Increment count
// }





// the do-while loop: Similar to the while loop, but it runs at least once and checks
// at the end to see whether the condition is met to run again. Its syntax is shown
// below:
// // Initialization of the loop variable is done before the do-while loop begins
// do{
// // 1. code to be executed in loop
// // 2. updation of the loop variable
// }while(condition checking for the loop);
// There are two statements that are important in the context of loops:
// the continue statement: Skip parts of the loop if certain conditions are met.
// break statement: Used to stop and exit the cycle when specific conditions are
// met

// do-while example  exercise
// let num = 1;
// do {
//     console.log("▶️ Number is:", num);
//     num++;
// } while (num <= 3);



// continue statement
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         console.log("🚀 Skipping 3...");
//         continue; // Skip iteration when i is 3
//     }
//     console.log("🔢 Number:", i);
// }

// break example
// for (let i = 1; i <= 5; i++) {
//     if (i === 4) {
//         console.log("🛑 Stopping at 4...");
//         break; // Stops loop when i is 4
//     }
//     console.log("🔢 Number:", i);
// }


// switch statements

// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("📅 It's the start of the week!");
//         break;
//     case "Friday":
//         console.log("🎉 Weekend is coming!");
//         break;
//     case "Sunday":
//         console.log("😴 Time to rest!");
//         break;
//     default:
//         console.log("Just another day!");
// }
