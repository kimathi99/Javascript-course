// 1. useContext - Sharing Data Across Components Without Props
// The useContext hook allows you to pass data to deeply nested components without prop drilling. In your current project, ComponentA and ComponentB don't use useContext, but let's integrate it.

// Example: Using useContext to Share the Counter Value
// Modify your project to create a context and provide the counter value to all components.

// Step 1: Create a Context File (CounterContext.tsx)
// import React, { createContext, useState, ReactNode } from "react";

// // Define the shape of our context data
// interface CounterContextType {
//   count: number;
//   increase: () => void;
//   decrease: () => void;
// }

// what is an interface
// Imagine you have a blueprint for a toy car. This blueprint tells you what parts the car should have, like wheels, a steering wheel, and a horn. But it doesn’t actually build the car—it just tells you what a real toy car should look like.

// In TypeScript, an interface is like that blueprint. It tells us what a certain object should look like.

// Example:
// The CounterContextType interface is a blueprint for an object that must have:

// A count (a number that keeps track of something).
// An increase function (to make the count go up).
// A decrease function (to make the count go down).




// // Create the context with a default value
// export const CounterContext = createContext<CounterContextType | null>(null);

// // Create a provider component
// export const CounterProvider = ({ children }: { children: ReactNode }) => {
//   const [count, setCount] = useState(0);

//   const increase = () => setCount((prev) => prev + 1);
//   const decrease = () => setCount((prev) => prev - 1);

//   return (
//     <CounterContext.Provider value={{ count, increase, decrease }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };
// Step 2: Wrap Your App with the Provider in App.tsx
// import React from "react";
// import { CounterProvider } from "./CounterContext";
// import ComponentB from "./components/ComponentB";

// function App() {
//   return (
//     <CounterProvider>
//       <h1>React Simple Counter</h1>
//       <ComponentB />
//     </CounterProvider>
//   );
// }

// export default App;
// Step 3: Consume Context in ComponentA.tsx
// import React, { useContext } from "react";
// import { CounterContext } from "../CounterContext";

// function ComponentA() {
//   const counterContext = useContext(CounterContext);
  
//   if (!counterContext) return null; // Handle null case

//   return (
//     <div>
//       <h1>Component A</h1>
//       <p>Shared Counter: {counterContext.count}</p>
//       <button onClick={counterContext.increase}>Increase</button>
//       <button onClick={counterContext.decrease}>Decrease</button>
//     </div>
//   );
// }

// export default ComponentA;
// Why useContext?
// ✅ No need to pass count and handlers as props from App → ComponentB → ComponentA
// ✅ Any component inside CounterProvider can access and modify the counter value
// ✅ Great for managing global state without prop drilling

// 🟢 2. useEffect - Handling Side Effects
// Your code already uses useEffect, but let’s break it down.

// Your Code's useEffect Usage
// useEffect(() => {
//   clickIncreaseHandler(); // Calls the increment function automatically
//   if (count === 0) return;
//   intialCount.current = intialCount.current + 1; // Stores how many times `count` changed
// }, [count, buttonClicked]); // Runs when `count` or `buttonClicked` changes
// Key Points About useEffect:
// Runs after the component renders
// Can run only once (by passing [] as dependencies)
// Can run when certain values change (like count, buttonClicked)
// Why Use It?
// Fetch data from APIs
// Sync state with local storage
// Perform side effects like logging, animations, etc.
// 🟢 3. useRef vs useState - The Special Difference
// Your Code Uses Both:
// const [count, setCount] = useState(0); // Normal state
// const intialCount = useRef(0); // Persistent reference
// useState(0): Stores a value and re-renders when changed
// useRef(0): Stores a value but does NOT re-render when changed
// 🎯 Special Example to Show the Difference
// import React, { useState, useRef } from "react";

// function RefVsState() {
//   const [stateValue, setStateValue] = useState(0);
//   const refValue = useRef(0);

//   const handleClick = () => {
//     setStateValue(stateValue + 1);
//     refValue.current += 1;
//     console.log("Ref Value (No Re-render):", refValue.current);
//   };

//   return (
//     <div>
//       <p>State Value: {stateValue}</p>
//       <p>Ref Value (Not Re-rendered): {refValue.current}</p>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }

// export default RefVsState;
// Key Takeaways
// ✅ useRef stores data without triggering a re-render
// ✅ useState updates the UI every time it's changed
// ✅ useRef is good for keeping values between renders, like input focus or counting renders

// 🟢 4. useCallback - Memorizing Functions
// useCallback is used to prevent unnecessary re-creation of functions.

// Example in Your Project
// Modify the handlers to use useCallback:

// import React, { useState, useCallback } from "react";

// function MemoizedFunctions() {
//   const [count, setCount] = useState(0);

//   // Normal function (re-created on every render)
//   const normalFunction = () => {
//     console.log("Normal function called!");
//   };

//   // Memoized function (only changes when count changes)
//   const memoizedFunction = useCallback(() => {
//     console.log("Memoized function called!");
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={normalFunction}>Call Normal Function</button>
//       <button onClick={memoizedFunction}>Call Memoized Function</button>
//     </div>
//   );
// }

// export default MemoizedFunctions;
// Why useCallback?
// ✅ Prevents unnecessary re-renders
// ✅ Optimizes performance in large apps

// 🟢 5. useMemo - Caching Expensive Computations
// useMemo is used to cache a computed value instead of recalculating it every render.

// Example: Expensive Calculation
// import React, { useState, useMemo } from "react";

// function ExpensiveComputation() {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(false);

//   // Expensive calculation
//   const computedValue = useMemo(() => {
//     console.log("Computing...");
//     return count * 2;
//   }, [count]); // Only re-computes when `count` changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Computed Value: {computedValue}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setOtherState(!otherState)}>Toggle State</button>
//     </div>
//   );
// }

// export default ExpensiveComputation;
// Why useMemo?
// ✅ Avoids expensive calculations on every render
// ✅ Improves performance in complex apps

// Final Thoughts
// useContext → Avoids prop drilling
// useEffect → Handles side effects
// useRef vs useState → useRef persists without re-rendering
// useCallback → Memoizes functions
// useMemo → Memoizes computed values
