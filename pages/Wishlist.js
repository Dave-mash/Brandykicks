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
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Layout from '../components/Layout';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Wishlist.module.css';


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

const createRow = (img, imgAlt, desc, unit, stockStatus) => ({ img, imgAlt, desc, unit, stockStatus });

let rows = [
    createRow("/sample1.jpg", 'black shoe', 'AIR JORDAN 1 DIOR', '4500', 'Available'),
    createRow("/sample2.jpg", 'black shoe', 'ADIDAS SAMOA', '3500', 'Sold out'),
    createRow("/sample3.jpg", 'black shoe', 'ADIDAS LIFESTYLE', '3200', 'Available'),
];

const Wishlist = () => {
    const classes = useStyles();

    const handleDeleteWishlist = (e) => {
        const target = e.target.parentElement.parentElement;

        target.style.display = 'none';
        // const target = e.target.parentElement.parentElement;
        // rows.filter((row, i) => {
        //     console.log(i && i !== 0)
        // })
        // console.log('targetIndex: ', targetIndex)
        // const rowIndexes = [0, ...rows];

        // target.style.display = 'none !important';
    }

    return (
        <div className={styles.wishlistContainer}>
            <Layout>
                <div className={styles.wishlist}>
                    <div className={`${styles.wishlistContent} ${styles.dsk}`}>
                        <ThemeProvider theme={theme}>
                            <Breadcrumbs aria-label="breadcrumb" style={styles.breadcrumbs}>
                                <Link color="inherit" href="/">Home</Link>
                                <Typography color="textPrimary">Wishlist</Typography>
                            </Breadcrumbs>
                        </ThemeProvider>
                        <div className={styles.wishlistItems}>
                            <h1 className={styles.wishlistTitle}>Saved Items (3)</h1>
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
                                            {rows.map((row, i) => (
                                                <TableRow key={row.desc} className={styles.tableRow} data-index={i}>
                                                    <TableCell className={styles.desc}>
                                                        <FontAwesomeIcon
                                                            icon={faTrashAlt}
                                                            className={styles.trashIcon}
                                                            onClick={(e) => handleDeleteWishlist(e)}
                                                        ></FontAwesomeIcon>
                                                        <Image
                                                            src={row.img}
                                                            alt={row.imgAlt}
                                                            width={80}
                                                            height={80}
                                                            className={styles.wishlistItemImage}
                                                        />
                                                        <span style={{ marginLeft: '30px' }}>{row.desc}</span>
                                                    </TableCell>
                                                    <TableCell align="right" className={styles.unitPrice}>{`KSH ${row.unit}`}</TableCell>
                                                    <TableCell align="right" className={styles.stockStatus}>{row.stockStatus}</TableCell>
                                                    <TableCell align="right" className={styles.actionBtn}>
                                                        <button
                                                            className={row.stockStatus === 'Sold out' ? styles.disabledActionwishlistBtn : styles.actionwishlistBtn}
                                                            disabled={row.stockStatus === 'Sold out'}
                                                        >{row.stockStatus === 'Sold out' ? 'OUT OF STOCK' : 'ADD TO CART'}</button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ThemeProvider>
                        </div>
                    </div>
                    <div className={`${styles.mbWishlist} ${styles.mb}`}>
                        <h4>SAVED ITEMS (3)</h4>
                        <div className={styles.wishlistItemsContainer}>
                            {rows.map(row => (
                                <div className={styles.wishlistItem} key={row.desc}>
                                    <div className={styles.wishlistDetails}>
                                        <div className={styles.itemImage}>
                                            <Image
                                                src={row.img}
                                                alt={row.imgAlt}
                                                width={80}
                                                height={80}
                                                className={styles.mbWishlistItemImage}
                                            />
                                        </div>
                                        <div className={styles.itemDetails}>
                                            <p className={styles.description}>{row.desc}</p>
                                            <p className={styles.unitPrice}>{`KSH ${row.unit}`}</p>
                                        </div>
                                    </div>
                                    <div className={styles.wishlistOptions}>
                                        <div className={styles.itemOptionsIcons}>
                                            <button>
                                                <FontAwesomeIcon icon={faTrashAlt} className={styles.trashIcon}></FontAwesomeIcon>REMOVE
                                        </button>
                                        </div>
                                        <div className={styles.actionBtn}>
                                            <button
                                                className={row.stockStatus === 'Sold out' ? styles.disabledActionwishlistBtn : styles.actionwishlistBtn}
                                                disabled={row.stockStatus === 'Sold out'}
                                            >{row.stockStatus === 'Sold out' ? 'OUT OF STOCK' : 'ADD TO CART'}</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
            <BottomNav />
        </div>
    )
};

export default Wishlist;