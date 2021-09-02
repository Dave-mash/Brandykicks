import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faList,
    faHeart,
    faShoppingBag,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from '../styles/components/BottomNav.module.css';


const BottomNav = () => {
    const router = useRouter();

    return (
        <div className={`${styles.navContainer} ${styles.mb}`}>
            <div className={styles.BottomNav}>
                <Link href="/">
                    <div className={`${router.pathname === '/' ? styles.active : styles.home}`}>
                        <FontAwesomeIcon icon={faHome} className={styles.homeIcon}></FontAwesomeIcon>
                        <p>Home</p>
                    </div>
                </Link>
                <Link href="/Wishlist">
                    <div className={`${router.pathname === '/Wishlist' ? styles.active : styles.wishlist}`}>
                        <FontAwesomeIcon icon={faHeart} className={styles.wishlistIcon}></FontAwesomeIcon>
                        <p>Wishlist</p>
                    </div>
                </Link>
                <Link href="/Categories">
                    <div className={`${router.pathname === '/Categories' ? styles.active : styles.categories}`}>
                        <FontAwesomeIcon icon={faList} className={styles.categoriesIcon}></FontAwesomeIcon>
                        <p>Categories</p>
                    </div>
                </Link>
                <Link href="/Cart">
                    <div className={`${router.pathname === '/Cart' ? styles.active : styles.cart}`}>
                        <div className={styles.cartIcon}>
                            <FontAwesomeIcon icon={faShoppingBag} className={styles.shoppingBagIcon}></FontAwesomeIcon>
                            <span className={styles.cartTotal}>3</span>
                        </div>
                        <p>Cart</p>
                    </div>
                </Link>
                <Link href="/account/Details">
                    <div className={`${router.pathname === '/Account' ? styles.active : styles.account}`}>
                        <FontAwesomeIcon icon={faUser} className={styles.accountIcon}></FontAwesomeIcon>
                        <p>Account</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BottomNav;