import { useEffect, useState, createRef, Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faHeadphonesAlt,
    faShoppingBag,
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';

import FilteredProducts from './FilteredProducts';
import {
    setTextFilter,
    focusResults,
    blurResults
} from '../redux/actions/filters';
import filterProducts from '../selectors/products';
import styles from '../styles/components/home/HeaderSlider.module.css';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.navbar = createRef();
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', null, false);
    }

    handleScroll() {
        const offset = window.scrollY;
        const navbar = !!this.navbar?.current ? this.navbar?.current : null;

        if (offset > 40) {
            this.setState(() => ({ scrolled: true }));

            if (!!navbar && !!navbar.style) {
                const md = window.screen.availWidth > 1280;

                navbar.style.position = 'fixed';
                navbar.style.width = '100%';
                navbar.style.top = '0';
                navbar.style.left = '0';
                if (md) this.navbar.current.parentElement.nextSibling.style.marginTop = '110px';
            }
        } else {
            this.setState(() => ({ scrolled: false }));

            if (!!navbar && !!navbar.style) {
                navbar.style.top = '40px';
                navbar.style.position = 'static';
                this.navbar.current.parentElement.nextSibling.style.marginTop = '10px';
            }
        };
    }

    render() {
        return (
            <div className={styles.navbarContainer} >
                <div className={`${styles.helpSection} ${styles.dsk}`}>
                    <div className={styles.helpSectionWrapper}>
                        <div className={styles.helpLine}>
                            <div className={styles.helpLineWrapper}>
                                <FontAwesomeIcon icon={faHeadphonesAlt} className={styles.headphones}></FontAwesomeIcon>
                                <p>Customer Support: +254 714 026472</p>
                            </div>
                            <div className={styles.headerSocials}>
                                <FontAwesomeIcon icon={faFacebookF} className={styles.socialBrand}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faInstagram} className={styles.socialBrand}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faTwitter} className={styles.socialBrand}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faWhatsapp} className={styles.socialBrand}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={styles.paymentMethods}>
                            <Image src="/paypal.png" width={30} height={20} alt="Paypal Logo card" className={styles.paypalPayment} />
                            <Image src="/mpesa.png" width={30} height={20} alt="Mpesa Logo card" className={styles.mpesaPayment} />
                        </div>
                    </div>
                </div>
                <nav className={styles.navbar} ref={this.navbar}>
                    <div className={styles.navbarWrapper}>
                        <div className={`${styles.logoSearchBar} ${styles.dsk}`}>
                            <Link href="/">
                                <Image src="/logo.png" width={100} height={90} alt="Brandykicks logo" layout="intrinsic" className={styles.logo} />
                            </Link>
                            <div className={styles.searchBar}>
                                <div className={styles.menuWrapper}>
                                    <div className={styles.menuSelect}>
                                        <p>All Categories</p>
                                        <FontAwesomeIcon icon={faChevronDown} className={styles.arrowDown}></FontAwesomeIcon>
                                    </div>
                                    <ul className={styles.menuList}>
                                        <li>All Categories</li>
                                        <li>Uncategorized</li>
                                        <li>Boat shoe</li>
                                        <ul className={styles.menuSubList}>
                                            <li>Brogue shoe</li>
                                            <li>Brothel creeper</li>
                                            <li>Snow boot</li>
                                        </ul>
                                        <li>Bucks</li>
                                        <li>Uncategorized</li>
                                        <ul className={styles.menuSubList}>
                                            <li>Brogue shoe</li>
                                            <li>Brothel creeper</li>
                                            <li>Snow boot</li>
                                        </ul>
                                        <li>Uncategorized</li>
                                        <li>Boat shoe</li>
                                    </ul>
                                </div>
                                {(!!this.props.filters.text && this.props.filters.searching) && <FilteredProducts />}
                                <input
                                    placeholder="Search a product..."
                                    className={styles.searchField}
                                    value={this.props.filters.text}
                                    onChange={e => this.props.setTextFilter(e.target.value)}
                                    onFocus={() => this.props.focusResults()}
                                    onBlur={() => this.props.blurResults()}
                                />
                                <button className={styles.searchBtn}>Search</button>
                            </div>
                        </div>
                        {/* mobile nav */}
                        <div className={`${styles.mb} ${styles.logoSearchBar}`}>
                            <Link href="/">
                                <Image src="/logo.png" width={50} height={45} alt="Brandykicks logo" layout="intrinsic" className={styles.logo} />
                            </Link>
                            <div className={styles.searchBar}>
                                {(!!this.props.filters.text && this.props.filters.searching) && <FilteredProducts />}
                                <input
                                    placeholder="Search a product..."
                                    className={styles.searchField}
                                    value={this.props.filters.text}
                                    onChange={e => this.props.setTextFilter(e.target.value)}
                                    onFocus={() => this.props.focusResults()}
                                    onBlur={() => this.props.blurResults()}
                                />
                                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={`${styles.authSaveCart} ${styles.dsk}`}>
                            <div className={styles.registerLogin}>
                                <Link href="/Account" className={styles.registerLogin}>
                                    <FontAwesomeIcon icon={faUser} className={styles.userIcon}></FontAwesomeIcon>
                                </Link>
                            </div>
                            <Link href="/Wishlist"><FontAwesomeIcon icon={faHeart} className={styles.wishlist}></FontAwesomeIcon></Link>
                            <Link href="/Cart">
                                <div className={styles.cartBtn}>
                                    <div className={styles.cartIconWrapper}>
                                        <FontAwesomeIcon icon={faShoppingBag} className={styles.cartIcon}></FontAwesomeIcon>
                                        <span className={styles.cartTotal}>3</span>
                                    </div>
                                    <div className={styles.cartText}>
                                        <div className={styles.myCart}>My Cart</div>
                                        <div className={styles.ksh}>KSH 0.00</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


const mapStateToProps = ({ filters, products }) => ({
    filters,
    products: filterProducts(products.productsList, filters)
});

const mapDispatchToProps = (dispatch) => ({
    focusResults: () => dispatch(focusResults()),
    blurResults: () => dispatch(blurResults()),
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);