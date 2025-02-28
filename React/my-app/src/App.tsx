

import './App.css'
import'./example.css';
import ComponentB from './components/componentB';
import { CounterProvider } from './context/countercontext';
import { Home } from './components/home';
import { MemoizedFunctions } from './components/usecallback';
import ExpensiveComputation from './components/usememo';

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
// 3. useref  is  more data persistent 
// 4.useeffect
  // const [count, setCount] = useState(0);
//   const[count, setCount] = useState(0);
//   const intialCount = useRef(0);
// const [buttonClicked,setButtonClicked]=useState(false);
// useEffect(() => {
//   // clickIncreaseHandler(); // Calls the increment function automatically
//   if (count === 0) return;
//   localStorage.setItem("useref",intialCount.current.toString());
//   intialCount.current = intialCount.current + 1; // Stores how many times `count` changed
// }, [count, buttonClicked]); // Runs when `count` or `buttonClicked` changes

//    // eslint-disable-next-line react-hooks/exhaustive-deps
//    function clickIncreaseHandler(){
//     if (count>= 10) {
//       return;
      
//     } else  {
//       setCount(count+1 );
      
//     }
    
    
//    }
//    function clickDecreaseHandler(){
//     if (count>= 1) {
//       setCount(count-1 ); 
      
//     } else  {
      
//       return;
      
//     }
//   }
//   function clickhandlerButton(){
//     setButtonClicked(!buttonClicked)
//   }


  return (
    <CounterProvider>
     <ExpensiveComputation></ExpensiveComputation>
      <MemoizedFunctions></MemoizedFunctions>
        <Home/>
        <ComponentB/>

        

    </CounterProvider>
   
  )
// const [stateValue, setStateValue] = useState(0);
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
}

export default App
