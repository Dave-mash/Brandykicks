import { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from "next/link";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import {
    faTrashAlt,
    faPlusCircle,
    faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'next/router';

import { wp_url } from '../config';
import NothingFound from '../components/NothingFound';
import withAuth from '../withAuth';
import { fetchCart } from '../redux/actions/cart';
import { formatCurrency } from '../utils';
import Layout from '../components/Layout';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Cart.module.css';
import spinner from '../styles/components/home/NewArrivals.module.css';
// import styles from '../styles/global.css';


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const theme = createMuiTheme({
    typography: {
        fontSize: 20,
    }
});

const theme2 = createMuiTheme({
    typography: {
        fontSize: 25,
    }
});

const handleOnQtyChange = () => {
    return;
}

const Cart = ({ cartList, fetchCart }) => {
    useEffect(() => {
        fetchCart();
    }, []);

    cartList = (!cartList ? [] : cartList);
    const cartListTotal = !!cartList ? cartList.length : 0;
    const classes = useStyles();
    const TAX_RATE = 0;

    const priceRow = (qty, unit) => qty * unit;

    const subtotal = (items) => items.map(
        ({ acf }) => parseInt(acf.price)).reduce((sum, i) => sum + i, 0);

    const invoiceSubtotal = subtotal(!cartList ? [] : cartList);
    const taxes = TAX_RATE * invoiceSubtotal;
    const total = taxes + invoiceSubtotal;


    const handleDeleteCartItem = (e) => {
        const target = e.target.parentElement.parentElement.parentElement;

        target.style.display = 'none';
    }

    return (
        <div className={styles.cartContainer}>
            <Layout>
                <div className={`${styles.cartContentContainer}`}>
                    <div className={`${styles.cartContent} ${styles.dsk}`}>
                        <ThemeProvider theme={theme}>
                            <Breadcrumbs aria-label="breadcrumb" style={styles.breadcrumbs}>
                                <Link color="inherit" href="/">Home</Link>
                                <Typography color="textPrimary">Cart</Typography>
                            </Breadcrumbs>
                        </ThemeProvider>
                        <div className={styles.cartItems}>
                            <h1 className={styles.cartTitle}>My Cart({cartListTotal} Items)</h1>
                            <ThemeProvider theme={theme2}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="spanning table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Item</TableCell>
                                                <TableCell align="left">Quantity</TableCell>
                                                <TableCell align="right">Unit</TableCell>
                                                <TableCell align="right">Sum</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                !cartList.length ? <NothingFound /> : cartList.map(cartItem => {
                                                    const {
                                                        title,
                                                        quantity,
                                                        unit_price,
                                                        img
                                                    } = cartItem.acf;

                                                    return (
                                                        <TableRow key={cartItem.id} className={styles.tableRow}>
                                                            <TableCell className={styles.desc}>
                                                                <FontAwesomeIcon
                                                                    icon={faTrashAlt}
                                                                    className={styles.trashIcon}
                                                                    onClick={(e) => handleDeleteCartItem(e)}
                                                                ></FontAwesomeIcon>
                                                                <Image
                                                                    src={img}
                                                                    alt={title}
                                                                    width={80}
                                                                    height={80}
                                                                    className={styles.cartItemImage}
                                                                />
                                                                <span style={{ marginLeft: '30px' }}>{title}</span>
                                                            </TableCell>
                                                            <TableCell align="left">
                                                                <input value={quantity} onChange={handleOnQtyChange} className={styles.qtyInput} type="number" />
                                                            </TableCell>
                                                            <TableCell align="right" className={styles.rowUnit}>{formatCurrency(unit_price)}</TableCell>
                                                            <TableCell align="right" className={styles.rowTotal}>{formatCurrency(priceRow(quantity, unit_price))}</TableCell>
                                                        </TableRow>
                                                    );
                                                })
                                            }
                                            <TableRow>
                                                <TableCell rowSpan={3} />
                                                <TableCell colSpan={2} className={styles.subtotalText}>SUBTOTAL</TableCell>
                                                {console.log('==> ', taxes)}
                                                <TableCell align="right" className={styles.subtotal}>{formatCurrency(invoiceSubtotal)}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={styles.taxText}>TAX</TableCell>
                                                <TableCell align="right">{`${TAX_RATE.toFixed(0)} %`}</TableCell>
                                                <TableCell align="right" className={styles.tax}>{formatCurrency(taxes)}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2} className={styles.totalText}>TOTAL</TableCell>
                                                <TableCell align="right" className={styles.total}>{formatCurrency(total)}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell rowSpan={2} />
                                                <TableCell>
                                                    <Link href="/">
                                                        <button className={styles.continueShopping} style={{
                                                            background: 'white',
                                                            color: '#bf1c2d',
                                                            borderRadius: '.3rem',
                                                            fontWeight: 'bold'
                                                        }}>CONTINUE SHOPPING</button>
                                                    </Link>
                                                </TableCell>
                                                <TableCell rowSpan={2} />
                                                <TableCell align="right">
                                                    <Link href="/Checkout">
                                                        <button className={styles.checkout} style={{
                                                            background: '#bf1c2d',
                                                            color: 'white',
                                                            borderRadius: '.3rem',
                                                            fontWeight: 'bold'
                                                        }}>PROCEED TO CHECKOUT</button>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ThemeProvider>
                        </div>
                    </div>
                    <div className={`${styles.mbCart} ${styles.mb}`}>
                        <h4>MY CART(3 ITEMS)</h4>
                        <div className={styles.cartItemsContainer}>
                            {
                                !cartList.length ? <NothingFound /> : cartList.map(cartItem => {
                                    const {
                                        title,
                                        quantity,
                                        unit_price,
                                        img
                                    } = cartItem.acf;

                                    return (
                                        <div className={styles.cartItem} key={cartItem.id}>
                                            <div className={styles.cartDetails}>
                                                <div className={styles.itemImage}>
                                                    <Image
                                                        src={img}
                                                        alt={title}
                                                        width={80}
                                                        height={80}
                                                        className={styles.mbCartItemImage}
                                                    />
                                                </div>
                                                <div className={styles.itemDetails}>
                                                    <p>{title}</p>
                                                    <p>{formatCurrency(unit_price)}</p>
                                                </div>
                                            </div>
                                            <div className={styles.cartOptions}>
                                                <div className={styles.itemOptionsIcons}>
                                                    <FontAwesomeIcon icon={faHeart} className={styles.wishlistIcon}></FontAwesomeIcon>
                                                    <FontAwesomeIcon icon={faTrashAlt} className={styles.trashIcon}></FontAwesomeIcon>
                                                </div>
                                                <div className={styles.itemQuantity}>
                                                    <FontAwesomeIcon icon={faMinusCircle} className={styles.minusIcon}></FontAwesomeIcon>
                                                    <input value={quantity} onChange={handleOnQtyChange} className={styles.mbQtyInput} type="number" />
                                                    <FontAwesomeIcon icon={faPlusCircle} className={styles.addIcon}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={`${styles.cartItem} ${styles.cartTotal}`}>
                            <div className={styles.cartItemsSubtotal}>
                                <p>Subtotal</p>
                                <p>KSH 15700.00</p>
                            </div>
                            <div className={styles.cartItemsVAT}>
                                <p>VAT</p>
                                <p>KSH 1099.00</p>
                            </div>
                            <div className={styles.cartItemsTotal}>
                                <p>Total</p>
                                <p className={styles.cumulativeTotal}>KSH 16799.00</p>
                            </div>
                            <div className={styles.checkoutBtn}>
                                <Link href="/Checkout">
                                    <button className={styles.checkout} style={{
                                        background: '#bf1c2d',
                                        color: 'white',
                                        borderRadius: '.3rem',
                                        width: '100%',
                                        fontWeight: 'bold'
                                    }}>PROCEED TO CHECKOUT</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <BottomNav />
        </div >
    )
};


const mapStateToProps = ({ cart }) => ({
    cartList: cart.cartList
})

const mapDispatchToProps = (dispatch) => ({
    fetchCart: () => dispatch(fetchCart())
})

const enhance = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default withRouter(withAuth(enhance));