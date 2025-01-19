import { useDispatch, useSelector } from 'react-redux';
import { products } from '../data';
import { addItem, changeQuantity, setCartItems } from '../slices/cartSlice';
import axios from 'axios';
import { usePatchCall } from '../hooks';

export function ProductSection() {
    return <div className='product-section'>
        {products.map(ele => <ProductCard key={ele.product_id} product={ele} />)}
    </div>;
}



function ProductCard({ product }) {
    const cartQuantity = useSelector(state => state.cart.items.find(ele => ele.product_id === product.product_id)?.quantity);
    const token = useSelector(state => state.auth.currentUser?.token);
    const dispatch = useDispatch();
    const makePatchRequest = usePatchCall();

    const handleAddToCart = () => {
        axios.post('http://localhost:5050/api/cart', {
            item: product,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                const items = response?.data?.cart || [];
                dispatch(setCartItems(items));
                console.log('added to cart');
            })
            .catch(err => console.error(err));
        // dispatch(addItem(product));
    };
    const id = product.product_id;
    const handleAdd = () => {
        makePatchRequest('http://localhost:5050/api/cart/quantity', { product_id: id, increament: 1 });
    }

    const handleRemove = () => {
        makePatchRequest('http://localhost:5050/api/cart/quantity', { product_id: id, increament: -1 });
    }
    return <div class="card">
        <img src={product.img_link} alt="product" class="card-image" />
        <div class="card-content">
            <h4 class="card-title">{product.product_name}</h4>
            <p class="card-description">{product.category}</p>
            <p>{product.discounted_price}</p>
            {
                cartQuantity ? (
                    <div className='cart-item-quantity'>
                        <button onClick={handleRemove}>-</button>
                        <div>{cartQuantity}</div>
                        <button onClick={handleAdd}>+</button>
                    </div>
                ) : (<button class="card-button" onClick={handleAddToCart}>Add to cart</button>)
            }

        </div>
    </div>
}
