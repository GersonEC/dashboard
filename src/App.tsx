import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { Login } from './pages/Login';
import { Dogs } from './pages/Dogs';
import { Signup } from './pages/Signup';
import { useDispatch } from 'react-redux';
import { loggedIn } from './features/auth/authSlice';
import FirebaseContext from './auth/firebaseContext';

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
  const dispatch = useDispatch();
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const checkLoggedIn = async () => {
      debugger;
      await firebase?.monitorAuthState();
      const user = firebase?.getUser();
      if (user) {
        dispatch(loggedIn(user?.email!));
      }
    };
    checkLoggedIn();
  }, []);

  return <Routing />;
}

export default App;
