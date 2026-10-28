import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Create from '../pages/Create';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

export default function Approuter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Home" element={<Home />} />

      <Route path="/signup" element={<Register />} />
      <Route path="/Signup" element={<Register />} />

      <Route path="/signin" element={<Login />} />
      <Route path="/Signin" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/about" element={<About />} />
      <Route path="/About" element={<About />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/Contact" element={<Contact />} />

      <Route path="/create" element={<Create />} />
      <Route path="/Create" element={<Create />} />
    </Routes>
  );
}
