import  React,{useState} from 'react'

import './App.css'
import'./example.css';
import ComponentB from './components/componentB';
function App() {
  // list of all  all  hooks to be used 
  // 1.useContext- Context lets a component receive information from distant parents without passing it as props.
  // what are this.props.props generally means properties 
  //in javascript -functions
//   function greet(name:string){
// return  name;
//   }
//2.usestste-used to store  info or  state
// java or typescript 
// learning about variable
// let age:number=30;
// in usestate we have two variables
// 1.used  to acess  the state 
// 2used  to set  the state 
// the usestate takes the initial this.state.
// this initial state  can be of differant data type
// it can take an array --[]
// it can also  be  a string '',number of any value,boolean ,null,undefined

  const [count, setCount] = useState(0);
   function clickIncreaseHandler(){
    setCount(count+1 );
    
   }
   function clickDecreaseHandler(){
    setCount(count-1 );
    
   }

  return (
    <div>
      < h1 id="title">React  simple counter</h1>
      <h2 id="title">example</h2>
      <p>Click the button to increase your score!</p>
      <button id="clickButton"  onClick={clickIncreaseHandler}> Increase </button>
      <button id="clickButton2"  onClick={clickDecreaseHandler}> Decrease</button>
      <p>Score: <span id="score">{count}</span></p>
      <ComponentB/>
    </div>
  )
}

export default App
