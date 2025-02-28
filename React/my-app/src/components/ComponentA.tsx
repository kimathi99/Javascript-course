import React, { useContext } from "react";
import { CounterContext } from "../context/countercontext";

function ComponentA() {
  const counterContext = useContext(CounterContext);
  
  if (!counterContext) return null; // Handle null case

  return (
    <div>
      <h1>Component A</h1>
      <p>Shared Counter: {counterContext.count}</p>
      <button onClick={counterContext.increase}>Increase</button>
      <button onClick={counterContext.decrease}>Decrease</button>
    </div>
  );
}

export default ComponentA;