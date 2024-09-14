import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className='h' to="/login">Login</Link>
            </li>
            <li>
              <Link className='h' to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  
        </Routes>
      </div>
    </Router>
    </div>
    
  );
};

export default App;
