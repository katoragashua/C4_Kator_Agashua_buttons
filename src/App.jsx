import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"

function App() {

  return (
    <>
      <div className="buttons">
        <Button label="Login" />
        <Button label="Signin"/>
      </div>
    </>
  );
}

export default App
