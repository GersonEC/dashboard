import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Home } from './pages/Home';


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           
        <Route path='login' element={<Login />}/>
        <Route path='dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
