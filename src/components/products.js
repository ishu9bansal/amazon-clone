import { useDispatch, useSelector } from 'react-redux';
import { products } from '../data';
import { addItem, changeQuantity } from '../slices/cartSlice';

export function ProductSection() {
    return <div className='product-section'>
        {products.map(ele => <ProductCard key={ele.product_id} product={ele} />)}
    </div>;
}

function ProductCard({ product }) {
    const cartQuantity = useSelector(state => state.cart.items.find(ele => ele.product_id === product.product_id)?.quantity);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem(product));
    };
    const id = product.product_id;
    const handleAdd = () => {
        dispatch(changeQuantity({ id, increament: 1 }));
    }

    const handleRemove = () => {
        dispatch(changeQuantity({ id, increament: -1 }));
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
