import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Loginform from "./components/Loginform"
import Register from "./components/Register"
import UserBooking from "./components/dashboard/Booking"
import UserDashboard from "./components/dashboard/UserDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";


function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Loginform/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />

        <Route path="/dashboard/booking" element={ <UserBooking/> } />
        {/* <Route path="/dashboard/user" element={ <UserDashboard/> } /> */}
        {/* <Route path="/dashboard/admin" element={ <AdminDashboard/> } /> */}

      </Routes>
   
  )
}

export default AllRoutes