import React from 'react';
import { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import NumericInput from 'react-numeric-input';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles, ThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faFacebookF,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { green } from '@material-ui/core/colors';

import Reviews from '../components/Reviews';
import Layout from '../components/Layout';
import BottomNav from '../components/BottomNav';
import styles from '../styles/ProductItem.module.css';


const theme = createMuiTheme({
    typography: {
        fontSize: 20,
    },
    palette: {
        primary: green
    },
});

const useStyles = makeStyles(theme => ({
    imageButton: {
        padding: '1rem',
        fontSize: '1.5rem',
        width: '50%',
        fontWeight: 'bold',
        color: 'white'
    }
}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    }
})(Rating);

const images = [{
    url: '/sample1.jpg',
    alt: 'shoe'
}, {
    url: '/sample2.jpg',
    alt: 'shoe'
}, {
    url: '/sample3.jpg',
    alt: 'shoe'
}, {
    url: '/sample4.jpg',
    alt: 'shoe'
}]

const ProductItem = () => {
    const [value, setValue] = React.useState(2);
    const [option, setOption] = React.useState("description");
    const classes = useStyles();

    const displayInfo = () => {
        switch (option) {
            case "description":
                return (
                    <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.<br /><br /> Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                )
            case "additionalInfo":
                return (
                    <div className={styles.additionalInfo}>
                        <p className={styles.variable}>COLOR</p>
                        <i className={styles.value}>White</i>
                    </div>
                )
            case "reviews":
                return (
                    <Reviews />
                )
            default:
                return (
                    <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.<br /><br /> Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                );
        }
    }

    return (
        <div className={styles.productItem}>
            <Layout>
                <div className={styles.product}>
                    <div className={styles.productBreadCrumb}>
                        <ThemeProvider theme={theme}>
                            <Breadcrumbs aria-label="breadcrumb" style={styles.breadcrumbs}>
                                <Link color="inherit" href="/">Home</Link>
                                <Link color="inherit" href="/">Jordans</Link>
                                <Typography color="textPrimary">AIR JORDAN 1 DIOR</Typography>
                            </Breadcrumbs>
                        </ThemeProvider>
                    </div>
                    <div className={styles.productItemDetails}>
                        <div className={styles.productImage}>
                            <div className={styles.subImages}>
                                <FontAwesomeIcon icon={faChevronUp} className={styles.arrowUp}></FontAwesomeIcon>
                                {
                                    images.map(image => (
                                        <Fragment key={image.url}>
                                            <div className={`${styles.subImageContainer} ${styles.dsk}`}>
                                                <Image
                                                    src={image.url}
                                                    alt={image.alt}
                                                    width={70}
                                                    height={70}
                                                    className={styles.productSubImage}
                                                />
                                            </div>
                                            <div className={`${styles.subImageContainer} ${styles.mb}`}>
                                                <Image
                                                    src={image.url}
                                                    alt={image.alt}
                                                    layout="fill"
                                                    objectFit="fill"
                                                    className={styles.productSubImage}
                                                />
                                            </div>
                                        </Fragment>
                                    ))
                                }
                                <FontAwesomeIcon icon={faChevronDown} className={styles.arrowDown}></FontAwesomeIcon>
                            </div>
                            <div className={`${styles.mainImage} ${styles.dsk}`}>
                                <Image
                                    src="/sample5.jpg"
                                    alt="shoe"
                                    width={350}
                                    height={350}
                                    className={styles.productMainImage}
                                />
                            </div>
                            <div className={`${styles.mainImage} ${styles.mb}`}>
                                <Image
                                    src="/sample5.jpg"
                                    alt="shoe"
                                    layout="fill"
                                    objectFit="fill"
                                    className={styles.productMainImage}
                                />
                            </div>
                        </div>
                        <div className={styles.productDetails}>
                            <h2 className={styles.productTitle}>AIR JORDAN 1 DIOR</h2>
                            <div className={styles.rating}>
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
                                <p className={styles.reviews}>(1 customer review)</p>
                            </div>
                            <div className={styles.productPrice}>
                                <h1>KSH 4,500.00</h1>
                                <h3>KSH 5,000.00</h3>
                            </div>
                            <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                            <div className={styles.productActions}>
                                <div className={styles.quantity}>
                                    <NumericInput min={0} max={100} value={1} moble="auto" style={{
                                        input: {
                                            fontSize: '1.5rem',
                                            height: '5rem'
                                        }
                                    }} />
                                </div>
                                <ThemeProvider theme={theme}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.imageButton}
                                    >ADD TO CART</Button>
                                </ThemeProvider>
                            </div>
                            <div className={styles.addToWishlist}>
                                <p><FontAwesomeIcon icon={faHeart} className={styles.heart}></FontAwesomeIcon>Add to Wishlist</p>
                            </div>
                            <div className={styles.shareProduct}>
                                <p>SHARE THIS PRODUCT: </p>
                                <span className={styles.shareIcons}>
                                    <FontAwesomeIcon icon={faFacebookF} className={styles.socialBrand}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faInstagram} className={styles.socialBrand}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faTwitter} className={styles.socialBrand}></FontAwesomeIcon>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productItemInfo}>
                        <div className={styles.infoNav}>
                            <h2
                                className={`${option === "description" ? "active " : ""}${styles.itemDescription}`}
                                onClick={() => setOption("description")}
                            >Description</h2>
                            <h2
                                className={`${option === "additionalInfo" ? "active " : ""}${styles.itemInfo}`}
                                onClick={() => setOption("additionalInfo")}
                            >Additional information</h2>
                            <h2
                                className={`${option === "reviews" ? "active " : ""}${styles.itemReviews}`}
                                onClick={() => setOption("reviews")}
                            >Reviews (1)</h2>
                        </div>
                        <div className={styles.infoText}>
                            {displayInfo()}
                        </div>
                    </div>
                </div>
            </Layout>
            <BottomNav />
        </div>
    );
}

export default ProductItem;