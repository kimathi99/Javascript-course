// Understanding Functions in TypeScript
// 📌 Objective: Learn function types and how to define, type, and use them in TypeScript.

// 1.1 Function Types in TypeScript
// Why TypeScript Function Types?

// Ensures correctness
// Improves code maintainability
// Enhances code readability
// Basic Function Syntax

// named function
// const additionOperation=function (a:number,b:number){
// return a+b;
// }
// const multipleOperations=function()async:number{
//   await  2+2;
//   await  3+5;
//     7-4;
// } 

const additionOperation=(a:number,b:number)=>a+b;
additionOperation(0,9);
// function greet(name: string): string {
//     return `Hello, ${name}!`;

    
// }
// console.log(greet('Nafraz'));
// console.log(greet("Alice")); // Hello, Alice!
// Arrow Functions

const add = (a: number, b: number): number => a + b;
console.log(add(5, 3)); // 8
// 1.2 Real-Life Scenario: Payment Gateway Callback
// 💡 Use Case: In a payment system, we need to define a function type for callbacks when a payment is successful.

type PaymentCallback = (status: string, amount: number) => void;

const onPaymentSuccess: PaymentCallback = (status, amount) => {
    console.log(`Payment ${status}: $${amount}`);
};

onPaymentSuccess("Success", 100);

// Module 2: Advanced Function Concepts
// 📌 Objective: Explore optional, default parameters, and rest parameters.

// 2.1 Optional and Default Parameters
// Optional Parameters (?)

function displayMessage(msg: string, user?: string) {
    console.log(`${msg}, ${user ?? "Guest"}!`);
}
displayMessage("Welcome"); // Welcome, Guest!
displayMessage("Welcome", "Alice"); // Welcome, Alice!

// Default Parameters

function createUser(name: string, isAdmin: boolean = false) {
    console.log(`${name} is ${isAdmin ? "an Admin" : "a User"}`);//ternary expression  expression
}
createUser("John"); // John is a User
createUser("Mary", true); // Mary is an Admin
// 2.2 Real-Life Scenario: Email Notification System
// 💡 Use Case: Send emails to users, where the subject is mandatory, but the body can be optional.

// function sendEmail(subject: string, body?: string) {
//     console.log(`Sending Email - Subject: ${subject}, Body: ${body ?? "No content provided"}`);
// }

// sendEmail("Meeting Reminder"); // No body provided
// sendEmail("Welcome", "Hello! Thanks for signing up."); 
// Module 3: Introduction to Generics
// 📌 Objective: Learn how generics improve reusability and flexibility.

// 3.1 What Are Generics?
// Why Use Generics?

// Avoids redundancy
// Works with multiple types
// Maintains type safety
// Basic Syntax
// function greet<string>(name:string):string{
//     return name;
// }
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(42)); // 42
// 3.2 Real-Life Scenario: Fetching API Data
// 💡 Use Case: Create a function that can fetch data of any type from an API.

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}
console.info
// asnchronous functionss
// task 1    19 seconds  to complete
// task 2
// task 3
// task 4
// // aysnchronous function ---we do not have the values 
// // query  binance --get the value after 2 seconds --await the  value--we are query apis and systems  we have to await
//         2  1 3 4-----total time taken is 6 seconds
// task 1 ----
// task 2 --
// task 3 -----
// task 4 ------
// // Fetching a user
// fetchData<{ name: string; age: number }>("https://api.example.com/user")
//     .then(user => console.log(user.name, user.age));
// Module 4: Advanced Generics Concepts
// 📌 Objective: Understand constraints, multiple types, and generic interfaces.


// 4.1 Constraints in Generics
// 💡 Use Case: Ensure that a function only accepts objects with a length property.

// function getLength<T extends { length: number }>(item: T): number {
//     return item.length;
// }
// console.log(getLength("Hello")); // 5
// console.log(getLength([1, 2, 3])); // 3
// 4.2 Generic Interfaces
// 💡 Use Case: Define a generic repository pattern for managing different entities in a database.

// interface Repository<T> {
//     add(item: T): void;
//     getAll(): T[];
// }

// class UserRepo implements Repository<{ id: number; name: string }> {
//     private users: { id: number; name: string }[] = [];

//     add(user: { id: number; name: string }) {
//         this.users.push(user);
//     }

//     getAll() {
//         return this.users;
//     }
// }

// const userRepo = new UserRepo();
// userRepo.add({ id: 1, name: "Alice" });
// console.log(userRepo.getAll()); // [{ id: 1, name: "Alice" }]
// Module 5: Combining Functions and Generics
// 📌 Objective: Use generics within functions to build reusable logic.

// 5.1 Generic Functions with Multiple Types
// 💡 Use Case: Swap values of different types.

// function swap<T, U>(a: T, b: U): [U, T] {
//     return [b, a];
// }
// console.log(swap("Hello", 42)); // [42, "Hello"]
// 5.2 Real-Life Scenario: Caching API Responses
// 💡 Use Case: Store API responses in a generic cache.

// class Cache<T> {
//     private data: Record<string, T> = {};

//     set(key: string, value: T) {
//         this.data[key] = value;
//     }

//     get(key: string): T | null {
//         return this.data[key] ?? null;
//     }
// }

// const userCache = new Cache<{ name: string; age: number }>();
// userCache.set("user1", { name: "Bob", age: 30 });
// console.log(userCache.get("user1")); // { name: "Bob", age: 30 }
// Module 6: Hands-On Practice & Assignments
// 📌 Objective: Apply learned concepts through exercises.

// 6.1 Group Activities
// Create a generic function that filters a list of items based on a condition.
// Implement a generic service class that fetches and stores data for multiple types.
// 6.2 Individual Exercises
// Write a function with generics to merge two objects of any type.
// Create a generic function to sort an array based on a given key.
