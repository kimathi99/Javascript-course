
import React, { useState, useCallback } from "react";
// 🟢 4. useCallback - Memorizing Functions
// useCallback is used to prevent unnecessary re-creation of functions.

// Example in Your Project
// Modify the handlers to use useCallback:
export function MemoizedFunctions() {
  const [count, setCount] = useState(0);

  // Normal function (re-created on every render)
  const normalFunction = () => {
    console.log("Normal function called!");
  };

  // Memoized function (only changes when count changes)
  const memoizedFunction = useCallback(() => {
    console.log("Memoized function called!");
  }, [count]);
//   useffect(function,watchlist ,when the wtach list )

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={normalFunction}>Call Normal Function</button>
      <button onClick={memoizedFunction}>Call Memoized Function</button>
    </div>
  );
}
