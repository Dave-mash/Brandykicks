import axios from 'axios';

import { wp_url } from '../../config';
import {
    FETCH_WISHLIST
} from './types';


const url = `https://${wp_url}/wp-json/wp/v2/wishlist`;

// fetch wishlist
export const fetchWishlist = () => async (dispatch) => {
    try {
        const wishlist = await axios.get(url).then(res => res.data);
        
        dispatch({
            type: FETCH_WISHLIST,
            payload: wishlist
        })

        return wishlist;
    } catch (e) {
        console.log('ERROR: ', e);
        return e
    }
}