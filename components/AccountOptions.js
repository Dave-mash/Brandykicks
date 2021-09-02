import { useRouter } from 'next/router';
import {
    faUser,
    faCog,
    faMapMarkerAlt,
    faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import styles from '../styles/Profile.module.css';


const AccountOptions = () => {
    const router = useRouter();

    const setActiveLink = (path) => {
        const active = router.pathname === `/account/${path}`;

        return active ? styles.active : '';
    }

    const handleLogout = () => {
        router.replace('/');
        logout();
    }

    return (
        <>
            <div className={`${styles.profileMenuList} ${styles.mb}`}>
                <ul className={styles.profileMenu}>
                    <Link href="/account/Details">
                        <li className={setActiveLink('Details')}>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon><p className={styles.faUser}>My details</p>
                        </li>
                    </Link>
                    <Link href="/account/Address">
                        <li className={setActiveLink('Address')}>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> <p className={styles.faCog}>My address book</p>
                        </li>
                    </Link>
                    <Link href="/account/Orders">
                        <li className={setActiveLink('Orders')}>
                            <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> <p className={styles.faMapMarkerAlt}>My orders</p>
                        </li>
                    </Link>
                    <Link href="/account/Settings">
                        <li className={setActiveLink('Settings')}>
                            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon> <p className={styles.faShoppingBag}>Account settings</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className={styles.profileLogoutBtn}>
                <button onClick={() => handleLogout()} className={styles.logoutBtn}>LOGOUT</button>
            </div>
        </>
    )
}

export default AccountOptions;