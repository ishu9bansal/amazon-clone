import { Link } from "react-router-dom";

export function Navbar() {
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