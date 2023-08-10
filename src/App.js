import './App.css';
import Home from './Home'
import Login from './Login'
import AboutUs from './AboutUs'
import Navbar from './Navbar'
import Contact from './Contact';
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
         <Route index element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
