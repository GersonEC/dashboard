import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { DashboardLayout } from './components/DashboardLayout';
import { Login } from './pages/Login';

const Random = () => {
  return (
    <DashboardLayout>
      <h1>RANDOMMMMMMMMMMMMMMMMM</h1>
    </DashboardLayout>
  );
};
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/random' element={<Random />} />
      </Routes>
    </Router>
  );
};

function App() {
  return <Routing />;
}

export default App;
