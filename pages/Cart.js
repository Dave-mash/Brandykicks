import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
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
import {
    faTrashAlt,
    faPlusCircle,
    faMinusCircle
} from "@fortawesome/free-solid-svg-icons";

import Layout from '../components/Layout';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Cart.module.css';


const TAX_RATE = 0.07;

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

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(img, imgAlt, desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { img, imgAlt, desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const handleOnQtyChange = () => {
    return;
}

const rows = [
    createRow("/sample1.jpg", 'black shoe', 'AIR JORDAN 1 DIOR', 2, 4500.00),
    createRow("/sample2.jpg", 'black shoe', 'ADIDAS SAMOA', 1, 3500.00),
    createRow("/sample3.jpg", 'black shoe', 'ADIDAS LIFESTYLE', 1, 3200.00),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Cart = () => {
    const classes = useStyles();

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
                            <h1 className={styles.cartTitle}>My Cart(3 Items)</h1>
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
                                            {rows.map((row) => (
                                                <TableRow key={row.desc} className={styles.tableRow}>
                                                    <TableCell className={styles.desc}>
                                                        <FontAwesomeIcon icon={faTrashAlt} className={styles.trashIcon}></FontAwesomeIcon>
                                                        <Image
                                                            src={row.img}
                                                            alt={row.imgAlt}
                                                            width={80}
                                                            height={80}
                                                            className={styles.cartItemImage}
                                                        />
                                                        <span style={{ marginLeft: '30px' }}>{row.desc}</span>
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <input value={row.qty} onChange={handleOnQtyChange} className={styles.qtyInput} type="number" />
                                                    </TableCell>
                                                    <TableCell align="right" className={styles.rowUnit}>{`KSH ${row.unit}`}</TableCell>
                                                    <TableCell align="right" className={styles.rowTotal}>{`KSH ${ccyFormat(row.price)}`}</TableCell>
                                                </TableRow>
                                            ))}

                                            <TableRow>
                                                <TableCell rowSpan={3} />
                                                <TableCell colSpan={2} className={styles.subtotalText}>SUBTOTAL</TableCell>
                                                <TableCell align="right" className={styles.subtotal}>{`KSH ${ccyFormat(invoiceSubtotal)}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className={styles.taxText}>TAX</TableCell>
                                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                                <TableCell align="right" className={styles.tax}>{`KSH ${ccyFormat(invoiceTaxes)}`}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2} className={styles.totalText}>TOTAL</TableCell>
                                                <TableCell align="right" className={styles.total}>{`KSH ${ccyFormat(invoiceTotal)}`}</TableCell>
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
                            {rows.map(row => (
                                <div className={styles.cartItem} key={row.desc}>
                                    <div className={styles.cartDetails}>
                                        <div className={styles.itemImage}>
                                            <Image
                                                src={row.img}
                                                alt={row.imgAlt}
                                                width={80}
                                                height={80}
                                                className={styles.mbCartItemImage}
                                            />
                                        </div>
                                        <div className={styles.itemDetails}>
                                            <p>{row.desc}</p>
                                            <p>{`KSH ${ccyFormat(row.price)}`}</p>
                                        </div>
                                    </div>
                                    <div className={styles.cartOptions}>
                                        <div className={styles.itemOptionsIcons}>
                                            <FontAwesomeIcon icon={faHeart} className={styles.wishlistIcon}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faTrashAlt} className={styles.trashIcon}></FontAwesomeIcon>
                                        </div>
                                        <div className={styles.itemQuantity}>
                                            <FontAwesomeIcon icon={faMinusCircle} className={styles.minusIcon}></FontAwesomeIcon>
                                            <input value={row.qty} onChange={handleOnQtyChange} className={styles.mbQtyInput} type="number" />
                                            <FontAwesomeIcon icon={faPlusCircle} className={styles.addIcon}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

export default Cart;