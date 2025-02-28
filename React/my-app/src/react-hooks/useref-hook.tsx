// The useRef value resets to zero when you refresh the page, while useState keeps track of its value across renders. So why is useRef important?

// Understanding useRef vs useState
// Feature	useState	useRef
// Causes Re-render?	✅ Yes (Changing state re-renders the component)----	❌ No (Changing ref does NOT re-render)
// Persistent Across Renders?	✅ Yes (State value survives re-renders)	----✅ Yes (Ref value survives re-renders)
// Persists on Refresh?	❌ No (State resets on refresh)	---❌ No (Ref resets on refresh)
// Use Case	Storing dynamic data that affects the UI	Keeping values without causing re-renders
// Why does useRef reset on refresh?
// useRef does not store data permanently—it's only meant for tracking values while the component is mounted.
// When you refresh the page, React remounts the component, creating a new ref with the initial value again.
// How is useRef still useful?
// Even though it resets on refresh, useRef is super important for:

// Keeping values between renders without causing re-renders

// Unlike useState, updating a ref won’t force the component to re-render, making it great for performance optimization.
// Example: Tracking how many times a button was clicked without re-rendering the component.
// Accessing and modifying DOM elements directly

// Example: Focusing on an input field when the page loads.
// Keeping values that don’t need to trigger UI updates

// Example: Storing timers in setTimeout or keeping track of previous values.
// Your Code Explanation
// const [stateValue, setStateValue] = useState(0);
// const refValue = useRef(0);

// const handleClick = () => {
//   setStateValue(stateValue + 1);  // Causes re-render----it rebuilds only we are not able to see with our naked eye
//   refValue.current += 1;  // Changes but does NOT re-render
//   console.log("Ref Value (No Re-render):", refValue.current);
// };
// stateValue changes and triggers a re-render.
// refValue.current updates but does not cause a re-render.
// Refreshing the page resets both values because the component remounts.
// If You Want to Save Data After Refresh?
// If you want to keep the values after refresh, you need to store them in localStorage or use a database.

// Example:

// useEffect(() => {
//   const savedValue = localStorage.getItem("refValue");
//   if (savedValue) {
//     refValue.current = Number(savedValue);
//   }
// }, []);

// const handleClick = () => {
//   refValue.current += 1;
//   localStorage.setItem("refValue", refValue.current.toString());
// };
// This way, even after a refresh, refValue will persist! 🚀







