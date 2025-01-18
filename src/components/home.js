import bgImg from '../assets/carousalImg8.jpg';
import { NavLayout } from './navbar';
import { ProductSection } from "./products";

function Home() {
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

export default function () {
    return <NavLayout>
        <Home />
    </NavLayout>;
}