import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar, NavLayout } from './components/navbar';
import Home from './components/home';
import Cart from './components/cart';
import Profile from './components/profile';
import { Login, Register } from './components/auth';

function App() {
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
