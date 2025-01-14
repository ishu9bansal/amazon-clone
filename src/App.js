import './App.css';

const categories = ["All", "Fresh", "MX Player", "Sell", "Lists", "Amazon Pay"];

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='navbar'>
          <div className='navbar-left'>
            <div className='logo'>Logo</div>
            <div className='location'>Location</div>
          </div>
          <div className='navbar-middle'>
            <div className='search'>Search Bar</div>
          </div>
          <div className='navbar-right'>
            <div className='language'>Language</div>
            <div className='account'>Account</div>
            <div className='orders'>Orders</div>
            <div className='cart'>Cart</div>
          </div>
        </div>
        <div className='category-bar'>
          {categories.map(category => <div key={category}>{category}</div>)}
        </div>
      </header>
      <div>
        <div>Carousal</div>
        <div>Deals Section</div>
        <div>Carousal Section</div>
        <div>Products Section</div>
      </div>
      <footer className='footer'>
        <div className='btt'>Back to top</div>
        <div className='contact-link'>Contact links</div>
        <div className='locale'>Locale selector</div>
        <div className='others'>Other services</div>
        <div className='about'>About</div>
      </footer>
    </div>
  );
}

export default App;
