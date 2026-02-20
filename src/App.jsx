
import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header"

function App() {
 const [location, setLocation] = useState("")

  return (
    <>
      <h1>App Components</h1>
      <Header/>
      <h2>{location}</h2>

      <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
     
     

    </>
  )
}

export default App
