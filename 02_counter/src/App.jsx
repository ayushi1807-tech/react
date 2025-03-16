import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(15)

//let counter = 5
 const addValue = () =>{
  counter = counter + 1;
  setCounter(counter)

 }
 const removeElement = () =>{
  setCounter(counter-1)
 }

  return (
    <>
     <h1>hello</h1>
     <h3>Counter value is : {counter} </h3>
     <button onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeElement}
     >decrement value{counter}</button>
     <p>Footer{counter}</p>
    </>
  )
}

export default App
