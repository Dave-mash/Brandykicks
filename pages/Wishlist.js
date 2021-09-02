import { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Layout from '../components/Layout';

import { fetchWishlist } from '../redux/actions/wishlist';
import { formatCurrency } from '../utils';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Wishlist.module.css';
import spinner from '../styles/components/home/NewArrivals.module.css';


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

const Wishlist = ({ wishlist, fetchWishlist }) => {
    const classes = useStyles();
    const wishlistTotal = !!wishlist ? wishlist.length : 0;

    useEffect(() => {
        fetchWishlist();
    }, []);

    const loadingSpinner = () => (
        <div className={styles.spinner} ref={spinner}>
            <div className={styles.loadingBanner}><CircularProgress /></div>
        </div>
    );

    const handleDeleteWishlist = (e) => {
        const target = e.target.parentElement.parentElement;

        target.style.display = 'none';
        // const target = e.target.parentElement.parentElement;
        // wishlist.filter((row, i) => {
        //     console.log(i && i !== 0)
        // })
        // console.log('targetIndex: ', targetIndex)
        // const rowIndexes = [0, ...wishlist];

        // target.style.display = 'none !important';
    }

    const content = (list, wishlist, jsx) => !list ? loadingSpinner() : (!list.length ? jsx : wishlist);

    return (
        <div className={styles.wishlistContainer}>
            <Layout>
                {
                    content(wishlist, <div className={styles.wishlist}>
                        <div className={`${styles.wishlistContent} ${styles.dsk}`}>
                            <ThemeProvider theme={theme}>
                                <Breadcrumbs aria-label="breadcrumb" style={styles.breadcrumbs}>
                                    <Link color="inherit" href="/">Home</Link>
                                    <Typography color="textPrimary">Wishlist</Typography>
                                </Breadcrumbs>
                            </ThemeProvider>
                            <div className={styles.wishlistItems}>
                                <h1 className={styles.wishlistTitle}>Saved Items ({wishlistTotal})</h1>
                                <ThemeProvider theme={theme2}>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="spanning table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Item</TableCell>
                                                    <TableCell align="right">Unit Price</TableCell>
                                                    <TableCell align="right">Stock Status</TableCell>
                                                    <TableCell align="right">Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    (!wishlist ? [] : wishlist).map((row, i) => {
                                                        const {
                                                            title,
                                                            price,
                                                            status,
                                                            img
                                                        } = row.acf;

                                                        return (
                                                            <TableRow key={row.id} className={styles.tableRow} data-index={i}>
                                                                <TableCell className={styles.desc}>
                                                                    <FontAwesomeIcon
                                                                        icon={faTrashAlt}
                                                                        className={styles.trashIcon}
                                                                        onClick={(e) => handleDeleteWishlist(e)}
                                                                    ></FontAwesomeIcon>
                                                                    <Image
                                                                        src={img}
                                                                        alt={title}
                                                                        width={80}
                                                                        height={80}
                                                                        className={styles.wishlistItemImage}
                                                                    />
                                                                    <span style={{ marginLeft: '30px' }}>{title}</span>
                                                                </TableCell>
                                                                <TableCell align="right" className={styles.unitPrice}>{formatCurrency(price)}</TableCell>
                                                                <TableCell align="right" className={styles.stockStatus}>{status}</TableCell>
                                                                <TableCell align="right" className={styles.actionBtn}>
                                                                    <button
                                                                        className={status === 'Out of stock' ? styles.disabledActionwishlistBtn : styles.actionwishlistBtn}
                                                                        disabled={status === 'Out of stock'}
                                                                    >{status === 'Out of stock' ? 'OUT OF STOCK' : 'ADD TO CART'}</button>
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </ThemeProvider>
                            </div>
                        </div>
                        <div className={`${styles.mbWishlist} ${styles.mb}`}>
                            <h4>SAVED ITEMS (3)</h4>
                            <div className={styles.wishlistItemsContainer}>
                                {
                                    (!wishlist ? [] : wishlist).map(row => {
                                        const {
                                            title,
                                            price,
                                            status,
                                            img
                                        } = row.acf;

                                        return (
                                            <div className={styles.wishlistItem} key={row.id}>
                                                <div className={styles.wishlistDetails}>
                                                    <div className={styles.itemImage}>
                                                        <Image
                                                            src={img}
                                                            alt={title}
                                                            width={80}
                                                            height={80}
                                                            className={styles.mbWishlistItemImage}
                                                        />
                                                    </div>
                                                    <div className={styles.itemDetails}>
                                                        <p className={styles.description}>{title}</p>
                                                        <p className={styles.unitPrice}>{`KSH ${price}`}</p>
                                                    </div>
                                                </div>
                                                <div className={styles.wishlistOptions}>
                                                    <div className={styles.itemOptionsIcons}>
                                                        <button><FontAwesomeIcon icon={faTrashAlt} className={styles.trashIcon}></FontAwesomeIcon>REMOVE</button>
                                                    </div>
                                                    <div className={styles.actionBtn}>
                                                        <button
                                                            className={status === 'Sold out' ? styles.disabledActionwishlistBtn : styles.actionwishlistBtn}
                                                            disabled={status === 'Sold out'}
                                                        >{status === 'Sold out' ? 'OUT OF STOCK' : 'ADD TO CART'}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>, <div className={spinner.loadingBanner}><h1>Nothing here yet! <Link href="/">Start shopping?</Link></h1></div>)
                }
            </Layout>
            <BottomNav />
        </div>
    )
};


const mapStateToProps = ({ wishlist }) => ({
    wishlist: wishlist.list
});

const mapDispatchToProps = (dispatch) => ({
    fetchWishlist: () => dispatch(fetchWishlist())
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);