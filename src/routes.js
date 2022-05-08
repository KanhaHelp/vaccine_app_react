import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Loginform from "./components/Loginform"
import Register from "./components/Register"

function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/register" element={ <Register/> } />

        <Route path="/login" element={ <Loginform/> } />

        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
   
  )
}

export default AllRoutes