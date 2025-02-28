import React, { createContext, useState, ReactNode, } from "react";

// Define the shape of our context data
interface CounterContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Create the context
export const CounterContext = createContext<CounterContextType | null>(null);


// Create a provider component
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => Math.max(prev - 1, 0)); // Prevents negative numbers

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
};
