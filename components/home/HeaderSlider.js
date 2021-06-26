import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

// import MobileSlider from './MobileSlider';
import styles from '../../styles/components/home/Header.module.css';


const HeaderSlider = (props) => {
    return (
        <div className={styles.headerContainer}>
            <div className={`${styles.headerSlider} ${styles.dsk}`}>
                <Carousel>
                    <Carousel.Item>
                        <Image src="/sample4.jpg" alt="Black shoe" width={1080} height={380} layout="responsive" className={styles.carouselImg} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/sample2.jpg" alt="Black shoe" width={1080} height={380} layout="responsive" className={styles.carouselImg} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/sample5.jpg" alt="Black shoe" width={1080} height={380} layout="responsive" className={styles.carouselImg} />
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* mobile slider */}
            <div className={`${styles.mbHeader} ${styles.mb}`}>
                {/* <MobileSlider /> */}
            </div>
        </div>
    );
}

export default HeaderSlider;