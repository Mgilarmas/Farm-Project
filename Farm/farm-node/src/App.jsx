import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from"./pages/home/Home"
import Contact from "./pages/contact/Contact"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
