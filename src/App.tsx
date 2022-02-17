import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { Login } from './pages/Login';
import { Dogs } from './pages/Dogs';
import { Signup } from './pages/Signup';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path='/dogs' element={<Dogs />} />
      </Routes>
    </Router>
  );
};

function App() {
  return <Routing />;
}

export default App;
