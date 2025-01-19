import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import Profile from './components/profile';
import { Login, Register } from './components/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCartItems } from './slices/cartSlice';

function App() {
  const user = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.token) {
      axios.get('http://localhost:5050/api/cart', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
        .then(response => {
          const items = response?.data?.cart || [];
          dispatch(setCartItems(items));
          console.log('success');
        })
        .catch(err => console.error(err));
    }
  }, [user]);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
