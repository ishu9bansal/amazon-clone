import bgImg from '../assets/carousalImg8.jpg';
import { ProductSection } from "./products";

export function Home() {
    return <div>
        <div className='bg-image'>
            <img src={bgImg} alt='carousal' style={{ width: '100%' }}></img>
        </div>
        <div className='content'>
            <div>Deals Section</div>
            <div>Carousal Section</div>
            <ProductSection />
        </div>
    </div>;
}
