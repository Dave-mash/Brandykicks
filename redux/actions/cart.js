import axios from 'axios';

import { wp_url } from '../../config';
import {
    FETCH_CART
} from './types';


const url = `https://${wp_url}/wp-json/wp/v2/cart`;

// fetch cart
export const fetchCart = () => async (dispatch) => {
    console.log('fetch cart')
    try {
        const cart = await axios.get(url).then(res => res.data);
        console.log('cart: ',cart)
        
        dispatch({
            type: FETCH_CART,
            payload: cart
        })

        return cart;
    } catch (e) {
        console.log('ERROR: ', e);
        return e
    }
}