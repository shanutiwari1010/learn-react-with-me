
import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  // let counter = 5;

  const addValue = ()=>{
    if(counter === 20 ){
      return;
    }
    counter = counter+1;
    setCounter(counter)
  }

  const removeValue = ()=>{
    if(counter === -1){
      return;
    }
    counter = counter-1;
    setCounter(counter)

  }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value  {counter}</button><br />
      <button onClick={removeValue}>remove value  {counter}</button>
    </>
  )
}

export default App
