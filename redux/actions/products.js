import axios from 'axios';

import {
    FETCH_ALL_PRODUCTS
} from './types';
import { wp_url } from '../../config';

// fetch all products
export const fetchAllProducts = () => async (dispatch) => {
    const url = `https://${wp_url}/wp-json/wp/v2/products`;

    try {
        const products = await axios.get(url).then(res => res.data);

        dispatch({
            type: FETCH_ALL_PRODUCTS,
            payload: products
        })

        return products;
    } catch (e) {
        console.log('ERROR: ', e);
        return e
    }
}