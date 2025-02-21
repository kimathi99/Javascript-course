import  React from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
     < h1 id="title">Click Counter Game</h1>
    <h2 id="title">example</h2>
    <p>Click the button to increase your score!</p>
    <button id="clickButton" className="learning-button">Click Me </button>
    <p>Score: <span id="score">0</span></p>
    </div>
  )
}

export default App
