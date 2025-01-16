import { products } from '../data';

export function ProductSection() {
    return <div className='product-section'>
        {products.map(ele => <ProductCard key={ele.product_id} product={ele} />)}
    </div>;
}

function ProductCard({ product }) {
    return <div class="card">
        <img src={product.img_link} alt="product" class="card-image" />
        <div class="card-content">
            <h4 class="card-title">{product.product_name}</h4>
            <p class="card-description">{product.category}</p>
            <p>{product.discounted_price}</p>
            <button class="card-button">Add to cart</button>
        </div>
    </div>
}
