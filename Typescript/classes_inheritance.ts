// // Topics: Classes, Inheritance, Access Modifiers
// // Objective: Learn how to create and extend classes.

// // Example 1: Basic Class Creation
// // Let's create a simple class to represent a Car.

// // typescript
// // Copy code
// class Car {
//     // Properties
//     private brand: string;
//     private model: string;
//     public year: number;

//     // Constructor
//     constructor(brand: string, model: string, year: number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     // Method to display car details
//     public displayInfo(): string {
//         return `${this.year} ${this.brand} ${this.model}`;
//     }
// }

// class Person{
//     private firstName:string;
//     private lastName:string;
//     private DOB:number;
//     private  nationalId:number;
//     constructor(firtName:string){
//         this.firstName=firtName;
//     }

//     public fullName():string{
//         return `${this.firstName} ${this.lastName}`
//     }
//     public age():number{
//         return  2025 - this.DOB;
//     }

// }


// function greet(){
//     console.log('hello there');
// }
// greet();

// // A constructor is a special method in a class that is automatically called when an instance (or object) of that class is created.
// //  The primary purpose of a constructor is to initialize the properties of the class and set up any necessary state for the object.

// // Key Features of Constructors:
// // Initialization: Constructors are used to initialize the properties of an object. This means you can set default values 
// // or pass values when creating an instance.

// // Same Name as Class: In many programming languages, including TypeScript, the constructor method has the 
// // same name as the class itself. In TypeScript, the constructor is defined using the constructor keyword.

// // No Return Type: Constructors do not have a return type, and they do not return a value. Their purpose is solely to initialize the object.

// // Automatic Invocation: When you create a new instance of a class using the new keyword, the constructor is called automatically.
// // // Usage
// const myCar = new Car('Toyota', 'Corolla', 2020);
// console.log(myCar.displayInfo()); // Output: 2020 Toyota Corolla
// // Example 2: Inheritance
// // Now, let's create a subclass ElectricCar that extends the Car class.

// // typescript
// // Copy code
// class ElectricCar extends Car {
//     private batteryCapacity: number; // in kWh

//     constructor(brand: string, model: string, year: number, batteryCapacity: number) {
//         super(brand, model, year); // Call the parent constructor
//         this.batteryCapacity = batteryCapacity;
//     }

//     // Overriding the displayInfo method
//     public displayInfo(): string {
//         return `${super.displayInfo()} with a battery capacity of ${this.batteryCapacity} kWh`;
//     }
// }

// // // Usage
// const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2021, 75);
// console.log(myElectricCar.year); // Output: 2021 Tesla Model 3 with a battery capacity of 75 kWh
// // Example 3: Access Modifiers
// // In the above examples, we used private and public access modifiers. Here’s a brief explanation:

// // private: The property or method can only be accessed within the class itself.
// // public: The property or method can be accessed from outside the class.
// // You can also use protected, which allows access in the class itself and in subclasses.

// // typescript
// // Copy code
// class Vehicle {
//     protected wheels: number;

//     constructor(wheels: number) {
//         this.wheels = wheels;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor() {
//         super(2); // Motorcycles typically have 2 wheels
//     }

//     public displayWheels(): string {
//         return `This motorcycle has ${this.wheels} wheels.`;
//     }
// }

// // class Phones{}
// // // Usage
// const myMotorcycle = new Motorcycle();
// console.log(myMotorcycle.displayWheels()); // Output: This motorcycle has 2 wheels.
// // Day 10: TypeScript with JavaScript
// // Topics: Using TypeScript in JavaScript projects
// // Objective: Understand how to integrate TypeScript into existing JavaScript code.

// // Example: Integrating TypeScript into a JavaScript Project
// // Setup TypeScript: First, ensure you have TypeScript installed in your project. You can do this by running:

// // bash
// // Copy code
// // npm install --save-dev typescript
// // Create a TypeScript Configuration File: You can create a tsconfig.json file to configure TypeScript options.
// // npm  install -g tpescript
// // json
// // Copy code
// // {
// //     "compilerOptions": {
// //         "target": "es6",
// //         "module": "commonjs",
// //         "outDir": "./dist",
// //         "strict": true
// //     },
// //     "include": ["src/**/*"],
// //     "exclude": ["node_modules"]
// // }
// // Convert a JavaScript File to TypeScript: Rename a .js file to .ts and start adding types.

// // JavaScript (example.js):

// // javascript
// // Copy code
// // function greet2(name:string) {
// //     return "Hello, " + name;
// // }

// // console.log(greet("World"));
// // TypeScript (example.ts):

// // typescript
// // Copy code
// // function greet(name: string): string {
// //     return "Hello, " + name;
// // }
// // console.log(greet("World"));
// // Compile TypeScript: You can compile your TypeScript files to JavaScript using the TypeScript compiler.

// // bash
// // Copy code
// // npx tsc
// // Run the Compiled JavaScript: After compilation, you can run the generated JavaScript files.

// // bash
// // Copy code
// // node dist/example.js