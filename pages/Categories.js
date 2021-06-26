import { isMobile, deviceType } from "react-device-detect";

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Categories.module.css';


const Categories = () => {
    console.log("isMobile: ", isMobile);
    console.log("deviceType: ", deviceType);
    console.log("tablet: ", deviceType === 'tablet');
    console.log("mobile: ", deviceType === 'mobile');
    return (
        <div className={styles.categoriesContainer}>
            <NavBar />
            <div className={styles.categories}>
                {!isMobile ? <div> This content is unavailable on mobile</div> : <div> ...content </div>}
            </div>
            <Footer />
            <BottomNav />
        </div>
    )
}

export default Categories;