import { useDispatch, useSelector } from 'react-redux';
import { products } from '../data';
import { addItem, changeQuantity, setCartItems } from '../slices/cartSlice';
import axios from 'axios';
import { usePatchCall, useRetryCall } from '../hooks';

export function ProductSection() {
    return <div className='product-section'>
        {products.map(ele => <ProductCard key={ele.product_id} product={ele} />)}
    </div>;
}



function ProductCard({ product }) {
    const cartQuantity = useSelector(state => state.cart.items.find(ele => ele.product_id === product.product_id)?.quantity);
    const token = useSelector(state => state.auth.currentUser?.token);
    const dispatch = useDispatch();
    const [loadingPatch, makePatchRequest] = useRetryCall('patch');
    const [loadingPost, makePostRequest] = useRetryCall('post');

    const loading = loadingPatch || loadingPost;

    const handleAddToCart = () => {
        makePostRequest('http://localhost:5050/api/cart', { item: product })
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
        makePatchRequest('http://localhost:5050/api/cart/quantity', { product_id: id, increament: 1 })
            .then(response => {
                const items = response?.data?.cart || [];
                dispatch(setCartItems(items));
            })
            .catch(err => console.error(err));
    }

    const handleRemove = () => {
        makePatchRequest('http://localhost:5050/api/cart/quantity', { product_id: id, increament: -1 })
            .then(response => {
                const items = response?.data?.cart || [];
                dispatch(setCartItems(items));
            })
            .catch(err => console.error(err));
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
                        <button disabled={loading} onClick={handleRemove}>-</button>
                        <div>{cartQuantity}</div>
                        <button disabled={loading} onClick={handleAdd}>+</button>
                    </div>
                ) : (<button disabled={loading} class="card-button" onClick={handleAddToCart}>Add to cart</button>)
            }

        </div>
    </div>
}
