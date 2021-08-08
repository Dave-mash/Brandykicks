import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

import {
    formatCurrency,
    displayContent,
    calculateOldPrice
} from '../../utils';
import styles from '../../styles/components/home/NewArrivals.module.css';


const NewArrivals = ({ products }) => (
    <div className={styles.newArrivalsContainer}>
        <div className={styles.newArrivals}>
            <div className={styles.newArrivalsHeading}>
                <h1>New Arrivals</h1>
                <div className={styles.newArivalsBorder}></div>
            </div>
            <div className={styles.newArrivalsItemsContainer}>
                {
                    displayContent(products, <div className={styles.newArrivalsWrapper}>
                        {
                            products.map(product => (
                                <Link
                                    href={`/${product.slug}`}
                                    className={styles.newArrivalsItemsWrapper}
                                    key={product.slug}
                                >
                                    <div className={styles.newArrivalsItems}>
                                        <div className={`${styles.itemImage} ${styles.dsk}`}>
                                            <Image src={product?.acf.img} alt={product?.acf.imgAlt} width={240} height={264} layout="intrinsic" className={styles.newArrivalImg} />
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
                                                src={product?.acf.img}
                                                alt={product?.acf.imgAlt}
                                                className={styles.newArrivalImg}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className={styles.itemDescription}>
                                            <div className={styles.itemBrand}>
                                                <p className={styles.itemBrandName}>{product?.acf.brand}</p>
                                            </div>
                                            <div className={styles.itemDetails}>
                                                <div className={styles.itemName}>
                                                    <p className={styles.itemNameText}>{product.title.rendered}</p>
                                                </div>
                                                <div className={styles.itemPrice}>
                                                    <p className={styles.itemNewPrice}>{formatCurrency(product?.acf.price)}</p>
                                                    {!!parseInt(product?.acf.discount) && <p className={styles.itemOldPrice}>{
                                                        calculateOldPrice(product?.acf.discount, product?.acf.price)
                                                    }</p>}
                                                </div>
                                            </div>
                                            <div className={`${styles.addItemToCart} ${styles.dsk}`}>
                                                <div className={styles.addToCartBtn}>
                                                    <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon}></FontAwesomeIcon>
                                                    <b>ADD TO CART</b>
                                                </div>
                                                <FontAwesomeIcon icon={faHeart} className={styles.wishlistIcon}></FontAwesomeIcon>
                                            </div>
                                            <div className={`${styles.mBaddItemToCart} ${styles.mb}`}>
                                                <button className={styles.addToCartBtn}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>, <div className={styles.loadingBanner}><CircularProgress /></div>)
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = ({ products }) => ({
    products: products.productsList,
})

export default connect(mapStateToProps)(NewArrivals);