import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from '@material-ui/core/Link';

import styles from '../../styles/components/home/NewArrivals.module.css';

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
},
{
    url: '/puma-black-rider',
    img: '/sample3.jpg',
    imgAlt: 'Puma Black Rider',
    brand: 'PUMA',
    title: 'PUMA BLACK RIDER',
    oldPrice: 'KSH 4,500.00',
    newPrice: 'KSH 3,500.00'
}];

const NewArrivals = () => (
    <div className={styles.newArrivalsContainer}>
        <div className={styles.newArrivals}>
            <div className={styles.newArrivalsHeading}>
                <h1>New Arrivals</h1>
                <div className={styles.newArivalsBorder}></div>
            </div>
            <div className={styles.newArrivalsItemsContainer}>
                <div className={styles.newArrivalsWrapper}>
                    {
                        products.map(product => (
                            <Link
                                href={product.url}
                                className={styles.newArrivalsItemsWrapper}
                                key={product.url}
                            >
                                <div className={styles.newArrivalsItems}>
                                    <div className={`${styles.itemImage} ${styles.dsk}`}>
                                        <Image src={product.img} alt={product.imgAlt} width={240} height={264} layout="intrinsic" className={styles.newArrivalImg} />
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
                                            src={product.img}
                                            alt={product.imgAlt}
                                            className={styles.newArrivalImg}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className={styles.itemDescription}>
                                        <div className={styles.itemBrand}>
                                            <p className={styles.itemBrandName}>{product.brand}</p>
                                        </div>
                                        <div className={styles.itemDetails}>
                                            <div className={styles.itemName}>
                                                <p className={styles.itemNameText}>{product.title}</p>
                                            </div>
                                            <div className={styles.itemPrice}>
                                                <p className={styles.itemNewPrice}>{product.newPrice}</p>
                                                <p className={styles.itemOldPrice}>{product.oldPrice}</p>
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
                </div>
            </div>
        </div>
    </div>
)
export default NewArrivals;