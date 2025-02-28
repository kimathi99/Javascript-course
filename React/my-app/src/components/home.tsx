import { useContext } from "react";
import { CounterContext } from "../context/countercontext";


 export  const Home=function (){
    const counterContext=useContext(CounterContext); //initialization 
    if (!counterContext) return null; // Handle null case
    return (
        <div>
           
        < h1 id="title">React  simple counter</h1>
        <h2 id="title">example</h2>
        <p>Click the button to increase your score!</p>
        <button id="clickButton"  onClick={counterContext.increase}> Increase </button>
        <button id="clickButton2"  onClick={counterContext.decrease}> Decrease</button>
        {/* <button id="clickButton2"  onClick={clickhandlerButton}>Click button</button> */}
        <p>Score:{counterContext.count} <span id="score"></span></p>
        {/* <p>useref:{intialCount.current} <span id="score"></span></p> */}
        </div>
    );
}