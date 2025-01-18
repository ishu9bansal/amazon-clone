import { Link } from "react-router-dom";

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
            <Link to={'/profile'}><div className='account'>Account</div></Link>
            <div className='orders'>Orders</div>
            <Link to={'/cart'}><div className='cart'><span style={{ fontWeight: 'bolder' }}>{3}</span> Cart</div></Link>
        </div>
    </div>;
}

const categories = ["All", "Fresh", "MX Player", "Sell", "Lists", "Amazon Pay"];
export function NavLayout({ children }) {
    return <>
        <header className='header'>
            <Navbar />
            <div className='category-bar'>
                {categories.map(category => <div key={category}>{category}</div>)}
            </div>
        </header>
        {children}
        <footer className='footer'>
            <div className='btt'>Back to top</div>
            <div className='contact-link'>Contact links</div>
            <div className='locale'>Locale selector</div>
            <div className='others'>Other services</div>
            <div className='about'>About</div>
        </footer>
    </>
}