import { useState, createRef, Fragment } from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faList,
    faSortUp,
    faSortDown,
    faTh,
    faShoppingCart,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Form from 'react-bootstrap/Form';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import { sortByPrice } from '../../redux/actions/filters';
import selectProducts from '../../selectors/products';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import BottomNav from '../../components/BottomNav';
import styles from '../../styles/Products.module.css';

const theme = createMuiTheme({
    typography: {
        fontSize: 20,
    },
    palette: {
        primary: green
    }
});

const useStyles = makeStyles(theme => ({
    imageButton: {
        padding: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white'
    }
}));

const products = [{
    url: '/air-jordan-1-dior',
    img: '/sample4.jpg',
    imgAlt: 'black shoe',
    brand: 'JORDAN',
    title: 'AIR JORDAN 1 DIOR',
    oldPrice: 'KSH 5,000.00',
    newPrice: 'KSH 4,500.00'
},
{
    url: '/puma-black-rider',
    img: '/sample3.jpg',
    imgAlt: 'Puma Black Rider',
    brand: 'PUMA',
    title: 'PUMA BLACK RIDER',
    oldPrice: 'KSH 4,500.00',
    newPrice: 'KSH 3,500.00'
},
{
    url: '/adidas-samoa',
    img: '/sample5.jpg',
    imgAlt: 'Adidas Samoa',
    brand: 'ADIDAS',
    title: 'ADIDAS SAMOA',
    oldPrice: null,
    newPrice: 'KSH 5,000.00'
},
{
    url: '/adidas-lifestyle',
    img: '/sample2.jpg',
    imgAlt: 'Adidas Lifestyle',
    brand: 'ADIDAS',
    title: 'ADIDAS LIFESTYLE',
    oldPrice: 'KSH 4,000.00',
    newPrice: 'KSH 3,200.00'
}]

const Products = ({ products, sortByPrice }) => {
    const classes = useStyles();
    const [value, setValue] = useState(2);
    const [range, setRange] = useState([20, 37]);
    const sortPrice = createRef();

    const handleChange = (event, newValue) => {
        setRange(newValue);
    };

    const handleSortByPrice = (order) => {
        const faUp = sortPrice.current.firstChild;
        const faDown = sortPrice.current.lastChild;

        switch (order) {
            case 'priceDescending':
                faUp.style.color = '#bf1c2d';
                faDown.style.color = '#999';
                break;
            case 'priceAscending':
                faDown.style.color = '#bf1c2d';
                faUp.style.color = '#999';
                break;
        }

        sortByPrice(order);
    }

    const handleDisplayType = (style) => {
        console.log('Changed display style to: ', style);
    }

    const handleSortItems = () => {
        // const sortVal = e.target.value.toLowerCase();

    }

    return (
        <div className={styles.productsContainer}>
            <NavBar />
            <div className={styles.products}>
                <div className={styles.productsBreadCrumb}>
                    <ThemeProvider theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb" style={styles.breadcrumbs}>
                            <Link color="inherit" href="/">Home</Link>
                            <Typography color="textPrimary">Jordans</Typography>
                        </Breadcrumbs>
                    </ThemeProvider>
                </div>
                <div className={styles.productsContent}>
                    <div className={styles.options}>
                        <div className={styles.categories}>
                            <h3>PRODUCT CATEGORIES</h3>
                            <span className={styles.category}>
                                <p>Adidas</p>
                                <FontAwesomeIcon icon={faChevronRight} className={styles.categgoryIcon}></FontAwesomeIcon>
                            </span>
                            <span className={styles.category}>
                                <p>Jordans</p>
                                <FontAwesomeIcon icon={faChevronRight} className={styles.categgoryIcon}></FontAwesomeIcon>
                            </span>
                            <span className={styles.category}>
                                <p>Puma</p>
                                <FontAwesomeIcon icon={faChevronRight} className={styles.categgoryIcon}></FontAwesomeIcon>
                            </span>
                        </div>
                        <div className={styles.colors}>
                            <h3>COLOR</h3>
                            <p className={styles.color}>Green (1)</p>
                            <p className={styles.color}>Blue (2)</p>
                            <p className={styles.color}>White (1)</p>
                        </div>
                        <div className={styles.priceFilter}>
                            <h3>FILTER BY PRICE</h3>
                            <div className={styles.rangeSlider}>
                                <Slider
                                    value={range}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                />
                            </div>
                            <ThemeProvider theme={theme}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.imageButton}
                                >FILTER</Button>
                            </ThemeProvider>
                            <span className={styles.priceRange}>
                                <p>Price:</p>
                                <h5>KSH 500 - KSH 5,000</h5>
                            </span>
                        </div>
                    </div>
                    <div className={styles.catalogue}>
                        <div className={styles.filtersBar}>
                            <div className={styles.sortBy}>
                                <div className={styles.results}>
                                    <div className={styles.displayStyle}>
                                        <FontAwesomeIcon
                                            icon={faList}
                                            className={styles.listIcon}
                                            onClick={() => handleDisplayType('list')}
                                        ></FontAwesomeIcon>
                                        <FontAwesomeIcon
                                            icon={faTh}
                                            className={styles.thIcon}
                                            onClick={() => handleDisplayType('grid')}
                                        ></FontAwesomeIcon>
                                    </div>
                                    <p>Showing 1–16 of 53 results</p>
                                </div>
                                <div className={styles.filters}>
                                    <div className={styles.sortByFilter}>
                                        <Form.Control
                                            as="select" custom
                                        // onChange={(e) => handleSortItems(e)}
                                        >
                                            <option>Sort by Latest</option>
                                            <option>Sort by Rating</option>
                                            <option>Sort by Popular</option>
                                        </Form.Control>
                                    </div>
                                    <span className={styles.sortPrice}>
                                        <p>Price:</p>
                                        <div className={styles.priceSortIcons} ref={sortPrice}>
                                            <FontAwesomeIcon
                                                icon={faSortUp}
                                                className={styles.faSortUpIcon}
                                                onClick={() => handleSortByPrice('priceDescending')}
                                            ></FontAwesomeIcon>
                                            <FontAwesomeIcon
                                                icon={faSortDown}
                                                className={styles.faSortDownIcon}
                                                onClick={() => handleSortByPrice('priceAscending')}
                                            ></FontAwesomeIcon>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productsCatalogue}>
                            {
                                products.map(product => (
                                    <Link
                                        href={product.url}
                                        className={styles.productsItemsWrapper}
                                    >
                                        <div className={styles.productsSectionWrapper}>
                                            <div className={styles.productsSection} key={product.url}>
                                                <div className={styles.productsItems}>
                                                    <div className={`${styles.itemImage} ${styles.dsk}`}>
                                                        <Image src={product.imgUrl} alt={product.imgAlt} width={240} height={264} layout="intrinsic" className={styles.productImg} />
                                                    </div>
                                                    <div
                                                        className={styles.mb}
                                                        style={{
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '22.3rem',
                                                            flex: '65%'
                                                        }}>
                                                        <Image
                                                            src={product.imgUrl}
                                                            alt={product.imgAlt}
                                                            className={styles.productImg}
                                                            layout="fill"
                                                            objectFit="cover"
                                                        />
                                                    </div>
                                                    <div className={styles.itemDescription}>
                                                        <div className={styles.itemBrand}>
                                                            <p className={styles.itemBrandName}>{product.brand}</p>
                                                            <div className={styles.stars}>
                                                                <Box component="fieldset" borderColor="transparent">
                                                                    <Rating
                                                                        name="simple-controlled"
                                                                        value={value}
                                                                        onChange={(event, newValue) => {
                                                                            setValue(newValue);
                                                                        }}
                                                                    />
                                                                </Box>
                                                            </div>
                                                        </div>
                                                        <div className={styles.itemDetails}>
                                                            <div className={styles.itemName}>
                                                                <p className={styles.itemNameText}>{product.title}</p>
                                                            </div>
                                                            <div className={styles.itemPrice}>
                                                                <p className={styles.itemNewPrice}>{product.price}</p>
                                                                <p className={styles.itemOldPrice}>{product.oldPrice}</p>
                                                            </div>
                                                        </div>
                                                        <div className={`${styles.mBaddItemToCart} ${styles.mb}`}>
                                                            <button className={styles.addToCartBtn}>Add to cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`${styles.addItemToCartWrapper} ${styles.dsk}`}>
                                                    <div className={`${styles.addItemToCart} ${styles.dsk}`}>
                                                        <div className={styles.addToCartBtn}>
                                                            <FontAwesomeIcon icon={faShoppingCart} className={styles.categgoryIcon}></FontAwesomeIcon>
                                                            <b>ADD TO CART</b>
                                                        </div>
                                                        <FontAwesomeIcon icon={faHeart} className={styles.wishlistIcon}></FontAwesomeIcon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={styles.paginator}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <BottomNav />
        </div>
    );
}

const mapStateToProps = ({ products, filters }) => ({
    products: selectProducts(products.productsList, filters)
})

const mapDispatchToProps = (dispatch) => ({
    sortByPrice: (order) => dispatch(sortByPrice(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);