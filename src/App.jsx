import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
console.log(count);
  return (
    <>
      <h1>HI PIPER</h1> 
      <button onClick = {() => setCount((count) => count + 1)}>The count is {count}</button>
    </>
    );
}

export default App
