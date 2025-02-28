// 🟢 5. useMemo - Caching Expensive Computations
// useMemo is used to cache a computed value instead of recalculating it every render.

// Example: Expensive Calculation
import React, { useState, useMemo } from "react";

export function ExpensiveComputation() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Expensive calculation
  const computedValue = useMemo(() => {
    console.log("Computing...");
    return count * 2;
  }, [count]); // Only re-computes when `count` changes

  return (
    <div>
        <h1>usememo</h1>
      <p>Count: {count}</p>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle State</button>
    </div>
  );
}

export default ExpensiveComputation;
// Why useMemo?
// ✅ Avoids expensive calculations on every render
// ✅ Improves performance in complex apps
