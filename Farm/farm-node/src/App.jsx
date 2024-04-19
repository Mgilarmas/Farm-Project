import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from"./pages/home/Home"
import Contact from "./pages/contact/Contact"
import "./App.css"
import Flowers from "./pages/flowers/Flowers"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/flowers" element={<Flowers/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
