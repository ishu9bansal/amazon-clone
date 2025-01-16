import './App.css';
import bgImg from './assets/carousalImg8.jpg';
import proImg from './assets/amazonproduct1.jpg'

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
        <div className='bg-image'>
          <img src={bgImg} style={{ width: '100%' }}></img>
        </div>
        <div className='content'>
          <div>Deals Section</div>
          <div>Carousal Section</div>
          <ProductSection />
        </div>
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

function ProductSection() {
  return <div className='product-section'>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>;
}

function ProductCard() {
  return <div class="card">
    <img src={proImg} alt="Card Image" class="card-image" />
    <div class="card-content">
      <h2 class="card-title">Card Title</h2>
      <p class="card-description">This is a description of the card. It gives more detail about the content.</p>
      <button class="card-button">Learn More</button>
    </div>
  </div>
}


export default App;
