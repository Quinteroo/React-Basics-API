import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home.jsx"
import Painting from './components/pages/Painting/Painting.jsx'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/painting/:id' element={<Painting />} />
      </Routes>
    </>
  )
}

export default App
