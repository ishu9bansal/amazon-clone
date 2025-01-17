import { useDispatch, useSelector } from 'react-redux';
import { products } from '../data';
import { addItem, changeQuantity } from '../slices/cartSlice';

export function ProductSection() {
    return <div className='product-section'>
        {products.map(product => <ProductCard key={product.product_id} product={product} />)}
    </div>;
}

function ProductCard({ product }) {
    const id = product.product_id;
    const quantity = useSelector(state => state.cart.items.find(ele => ele.product_id === id)?.quantity);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem(product));
    };



    const handleDecrement = () => {
        dispatch(changeQuantity({ id, increament: -1 }));
    };
    const handleIncrement = () => {
        dispatch(changeQuantity({ id, increament: 1 }));
    };
    return <div class="card">
        <img src={product.img_link} alt="product" class="card-image" />
        <div class="card-content">
            <h4 class="card-title">{product.product_name}</h4>
            <p class="card-description">{product.category}</p>
            <p>{product.discounted_price}</p>
            {
                quantity
                    ? (<div className='cart-item-quantity'>
                        <button onClick={handleDecrement}>-</button>
                        <div>{quantity}</div>
                        <button onClick={handleIncrement}>+</button>
                    </div>)
                    : (<button class="card-button" onClick={handleAddToCart}>Add to cart</button>)
            }

        </div>
    </div>
}
