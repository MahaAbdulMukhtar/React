import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)

  // let counter = 15;

  const addValue = () => {

    //counter = counter + 1;
    setCounter(counter + 1);

    if (counter >= 20) {
      setCounter(counter)
    }
    
  }

  const removeValue = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button> 
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>@2026 Counter App</p>
    </>
  )
}

export default App
