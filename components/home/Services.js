import Image from 'next/image';

import styles from '../../styles/components/home/Services.module.css';


const Services = () => (
    <div className={styles.services}>
        <div className={styles.servicesInfo}>
            <ul className={`${styles.servicesList} ${styles.dsk}`}>
                <li className={styles.servicesListItem}>
                    <Image src="/ship.png" alt="Free Delivery" width={64} height={64} layout="intrinsic" />
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>FREE DELIVERY</p>
                        <p className={styles.textInfo}>Free delivery within Nairobi</p>
                    </div>
                </li>
                <div className={styles.serviceBorder}></div>
                <li className={styles.servicesListItem}>
                    <Image src="/return-on-investment.png" alt="Return on investment" width={64} height={64} layout="intrinsic" />
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>RETURN</p>
                        <p className={styles.textInfo}>100% return on investment</p>
                    </div>
                </li>
                <div className={styles.serviceBorder}></div>
                <li className={styles.servicesListItem}>
                    <Image src="/support.png" alt="Online support" width={64} height={64} layout="intrinsic" />
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>ONLINE SUPPORT</p>
                        <p className={styles.textInfo}>Online Support 24 hours a day</p>
                    </div>
                </li>
                <div className={styles.serviceBorder}></div>
                <li className={styles.servicesListItem}>
                    <Image src="/wholesale.png" alt="Whole sale" width={64} height={64} layout="intrinsic" />
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>WHOLE SALE</p>
                        <p className={styles.textInfo}>Whole sale purchase ranges from 5 products</p>
                    </div>
                </li>
            </ul>
            <ul className={`${styles.servicesList} ${styles.mb}`}>
                <li className={styles.servicesListItem}>
                    <div className={styles.serviceImage}>
                        <Image src="/ship.png" alt="Free Delivery" width={32} height={32} layout="intrinsic" />
                    </div>
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>FREE DELIVERY</p>
                        <p className={styles.textInfo}>Free delivery within Nairobi</p>
                    </div>
                </li>
                <li className={styles.servicesListItem}>
                    <div className={styles.serviceImage}>
                        <Image src="/return-on-investment.png" alt="Return on investment" width={32} height={32} layout="intrinsic" />
                    </div>
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>RETURN</p>
                        <p className={styles.textInfo}>100% return on investment</p>
                    </div>
                </li>
                <li className={styles.servicesListItem}>
                    <div className={styles.serviceImage}>
                        <Image src="/support.png" alt="Online support" width={32} height={32} layout="intrinsic" />
                    </div>
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>ONLINE SUPPORT</p>
                        <p className={styles.textInfo}>Online Support 24 hours a day</p>
                    </div>
                </li>
                <li className={styles.servicesListItem}>
                    <div className={styles.serviceImage}>
                        <Image src="/wholesale.png" alt="Whole sale" width={32} height={32} layout="intrinsic" />
                    </div>
                    <div className={styles.servicesListItemTextInfo}>
                        <p className={styles.textTitle}>WHOLE SALE</p>
                        <p className={styles.textInfo}>Whole sale purchase ranges from 5 products</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

export default Services;