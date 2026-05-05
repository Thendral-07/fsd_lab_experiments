import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ValidatedForm from './ValidatedForm'
import './App.css'

function App() {
  const [count, setCount,] = useState(0);
  const[title, setTitle, ] = useState('');
  function handleCount(){
    count+=1;
    setCount(count);
  }
  function displayTitle(){
   title = "Kongu Engineering College"
   setTitle(title);
  }

  return (
    <>
      <div>
        <a href="http://kongu.ac.in" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo redirecting to Kongu" />
        </a>
        <a href="https://coe.kongu.edu" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <ValidatedForm/>
      <h2>Vite + React created project</h2>
      <h3>This is the home page of react file after creating the project</h3>
      <div className="card">
        <button onclick={handleCount()}> count is {count} </button>
        <button onclick={displayTitle()}> Click me </button>
        
       <h3>{title}</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite to redirect to kongu.ac.in
      </p>
      <p className="read-the-docs">Click on the react to redirect to coe.kongu.edu</p>
    </>
  )
}

export default App //File name is app , Exporting the file as component can be used as a sub component
