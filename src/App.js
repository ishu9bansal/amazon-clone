import './App.css';
import bgImg from './assets/carousalImg8.jpg';
import proImg from './assets/amazonproduct1.jpg';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { products } from './data';

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

function Home() {
  return <div>
    <div className='bg-image'>
      <img src={bgImg} style={{ width: '100%' }}></img>
    </div>
    <div className='content'>
      <div>Deals Section</div>
      <div>Carousal Section</div>
      <ProductSection />
    </div>
  </div>;
}

function Cart() {
  const cartItems = products.slice(0, 4).map(ele => ({ ...ele, quantity: 1 }));
  return <div className='cart-page'>
    <div className='cart-section'>
      <div className='shopping-cart'>
        <h1 className='cart-title'>Shopping Cart</h1>
        <div className='cart-price-label'>Price</div>
        <hr />
        {cartItems.map(item => <CartItem key={item.product_id} item={item} />)}
        <h4 className='cart-subtotal'>Subtotal (3 items): $340</h4>
      </div>
    </div>
    <div className='summary-section' >
      <div className='summary-card'>
        <div>Subtotal (2 items): <strong>$500</strong></div>
        <button>Proceed to Buy</button>
      </div>
    </div>
  </div>;
}

function CartItem({ item }) {
  return <>
    <div className='cart-item'>
      <input type='checkbox' />
      <img src={item.img_link} alt="Card Image" class="cart-item-image" />
      <div className='item-details'>
        <span><strong>{item.product_name}</strong></span>
        <span>{item.category}</span>
        <div className='cart-item-quantity'>
          <button>-</button>
          <div>{item.quantity}</div>
          <button>+</button>
        </div>

      </div>
      <div className='item-price'>
        <span><strong>{item.discounted_price}</strong></span>
        <span>M.R.P.: <s>{item.actual_price}</s></span>
        <div>-{item.discount_percentage}</div>

      </div>
    </div>
    <hr />
  </>
}

function Navbar() {
  return <div className='navbar'>
    <div className='navbar-left'>
      <Link to={'/'}><div className='logo'>Logo</div></Link>

      <div className='location'>Location</div>
    </div>
    <div className='navbar-middle'>
      <div className='search'>Search Bar</div>
    </div>
    <div className='navbar-right'>
      <div className='language'>Language</div>
      <div className='account'>Account</div>
      <div className='orders'>Orders</div>
      <Link to={'/cart'}><div className='cart'><span style={{ fontWeight: 'bolder' }}>{3}</span> Cart</div></Link>
    </div>
  </div>;
}

function ProductSection() {
  return <div className='product-section'>
    {products.map(ele => <ProductCard key={ele.product_id} product={ele} />)}
  </div>;
}

function ProductCard({ product }) {
  return <div class="card">
    <img src={product.img_link} alt="Card Image" class="card-image" />
    <div class="card-content">
      <h4 class="card-title">{product.product_name}</h4>
      <p class="card-description">{product.category}</p>
      <p>{product.discounted_price}</p>
      <button class="card-button">Add to cart</button>
    </div>
  </div>
}


export default App;
