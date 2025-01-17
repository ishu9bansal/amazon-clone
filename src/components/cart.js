
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, toggleItem } from '../slices/cartSlice';

export function Cart() {
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
    const dispatch = useDispatch();
    const id = item.product_id;
    const handleToggle = () => {
        dispatch(toggleItem(id));
    };

    const handleDecrement = () => {
        dispatch(changeQuantity({ id, increament: -1 }));
    };
    const handleIncrement = () => {
        dispatch(changeQuantity({ id, increament: 1 }));
    };
    return <>
        <div className='cart-item'>
            <input type='checkbox' checked={item.selected} onChange={handleToggle} />
            <img src={item.img_link} alt="Cart item" class="cart-item-image" />
            <div className='item-details'>
                <span><strong>{item.product_name}</strong></span>
                <span>{item.category}</span>
                <div className='cart-item-quantity'>
                    <button onClick={handleDecrement}>-</button>
                    <div>{item.quantity}</div>
                    <button onClick={handleIncrement}>+</button>
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

