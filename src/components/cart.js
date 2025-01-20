
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, setCartItems, toggleItem } from '../slices/cartSlice';
import { NavLayout } from './navbar';
import axios from 'axios';
import { usePatchCall, useRetryCall } from '../hooks';

function Cart() {
    const cartItems = useSelector(state => state.cart.items);
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
    const id = item.product_id;
    // const makePatchRequest = usePatchCall();
    const [loading, makePatchRequest] = useRetryCall('patch');
    const dispatch = useDispatch();

    const handleToggle = () => {
        makePatchRequest('http://localhost:5050/api/cart/toggle', { product_id: id })
            .then(response => {
                const items = response?.data?.cart || [];
                dispatch(setCartItems(items));
            }).catch(err => console.error(err));
    }

    const handleAdd = () => {
        makePatchRequest(
            'http://localhost:5050/api/cart/quantity',
            { product_id: id, increament: 1 },
        ).then(response => {
            const items = response?.data?.cart || [];
            dispatch(setCartItems(items));
        }).catch(err => console.error(err));
    }

    const handleRemove = () => {
        makePatchRequest('http://localhost:5050/api/cart/quantity', { product_id: id, increament: -1 })
            .then(response => {
                const items = response?.data?.cart || [];
                dispatch(setCartItems(items));
            }).catch(err => console.error(err));
    }
    return <>
        <div className='cart-item'>
            <input disabled={loading} type='checkbox' checked={item.selected} onClick={handleToggle} />
            <img src={item.img_link} alt="Cart item" class="cart-item-image" />
            <div className='item-details'>
                <span><strong>{item.product_name}</strong></span>
                <span>{item.category}</span>
                <div className='cart-item-quantity'>
                    <button disabled={loading} onClick={handleRemove}>-</button>
                    <div>{item.quantity}</div>
                    <button disabled={loading} onClick={handleAdd}>+</button>
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


export default function () {
    return <NavLayout>
        <Cart />
    </NavLayout>;
}