import { createRef, Component } from "react"
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
import { fetchCart } from '../redux/actions/cart';
import filterProducts from '../selectors/products';
import styles from '../styles/components/home/HeaderSlider.module.css';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.navbar = createRef();
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            scrolled: false,
            isLoggedIn: this.props.auth.isLoggedIn
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
        console.log('this.state.isLoggedIn',this.state.isLoggedIn)
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
                                        <Link href="/products/boat-shoe"><li>Boat shoe</li></Link>
                                        <ul className={styles.menuSubList}>
                                            <Link href="/products/boat-shoe"><li>Brogue shoe</li></Link>
                                            <Link href="/products/brothel-creeper"><li>Brothel creeper</li></Link>
                                            <Link href="/products/snow-boot"><li>Snow boot</li></Link>
                                        </ul>
                                        <Link href="/products/bucks"><li>Bucks</li></Link>
                                        <li>Uncategorized</li>
                                        <ul className={styles.menuSubList}>
                                            <Link href="/products/brogue-shoe"><li>Brogue shoe</li></Link>
                                            <Link href="/products/brothel-creeper"><li>Brothel creeper</li></Link>
                                            <Link href="/products/snow-boot"><li>Snow boot</li></Link>
                                        </ul>
                                        <li>Uncategorized</li>
                                        <Link href="/products/boat-shoe"><li>Boat shoe</li></Link>
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
                                <Link href="/Profile" className={styles.registerLogin}>
                                    <FontAwesomeIcon icon={faUser} className={styles.userIcon}></FontAwesomeIcon>
                                </Link>
                            </div>
                            <Link href="/Wishlist"><FontAwesomeIcon icon={faHeart} className={styles.wishlist}></FontAwesomeIcon></Link>
                            <Link href="/Cart">
                                <div
                                    className={styles.cartBtn}
                                    onClick={() => this.props.fetchCart()}
                                >
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


const mapStateToProps = ({ filters, products, auth }) => ({
    filters,
    auth,
    products: filterProducts(products.productsList, filters)
});

const mapDispatchToProps = (dispatch) => ({
    focusResults: () => dispatch(focusResults()),
    blurResults: () => dispatch(blurResults()),
    fetchCart: () => dispatch(fetchCart()),
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);