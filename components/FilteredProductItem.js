import React from 'react';
import { connect } from 'react-redux';
import Image from 'next/image';

// import { fetchProduct } from '../actions/products';
import {
    hideResult,
    setTextFilter
} from '../redux/actions/filters';
import styles from '../styles/components/home/HeaderSlider.module.css';


const FilterProductItem = ({
    setTextFilter,
    hideResult,
    imgUrl,
    imgAlt,
    title
}) => (
        <li
            onMouseDown={(e) => {
                e.preventDefault();
                hideResult();
                setTextFilter();
            }}
            className={styles.searchItem}
        >
            <div className={styles.searchItemWrapper}>
                <Image
                    src={imgUrl}
                    width={50}
                    height={40}
                    alt={imgAlt}
                    className={styles.paypalPayment}
                />
                <span className={styles.searchDescription}>{title}</span>
            </div>
        </li>
    );

const mapDispatchToProps = (dispatch) => ({
    hideResult: () => dispatch(hideResult()),
    // fetchProduct: (id) => dispatch(fetchProduct(id)),
    setTextFilter: () => dispatch(setTextFilter())
});

export default connect(undefined, mapDispatchToProps)(FilterProductItem);