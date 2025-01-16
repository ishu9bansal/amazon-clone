import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { Cart } from './components/cart';

const categories = ["All", "Fresh", "MX Player", "Sell", "Lists", "Amazon Pay"];
function App() {
  return (
    <Router>
      <div className="App">
        <header className='header'>
          <Navbar />
          <div className='category-bar'>
            {categories.map(category => <div key={category}>{category}</div>)}
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>


        <footer className='footer'>
          <div className='btt'>Back to top</div>
          <div className='contact-link'>Contact links</div>
          <div className='locale'>Locale selector</div>
          <div className='others'>Other services</div>
          <div className='about'>About</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
