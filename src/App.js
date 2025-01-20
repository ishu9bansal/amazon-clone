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
import { setCurrentUser } from './slices/authSlice';

function App() {
  const user = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (user) {
      axios.get('http://localhost:5050/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          const items = response?.data?.cart || [];
          dispatch(setCartItems(items));
          console.log('success');
        })
        .catch(err => console.error(err));
    }
    return () => {
      dispatch(setCartItems([]));
    }
  }, [user]);

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    axios.post('http://localhost:5001/user', { token: refreshToken })
      .then(response => {
        const user = response.data;
        dispatch(setCurrentUser(user));
      }).catch(err => console.error(err));
  }, []);
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
