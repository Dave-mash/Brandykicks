import axios from 'axios';

import {
    FETCH_ALL_PRODUCTS
} from './types';

// fetch all products
export const fetchAllProducts = (payload) => (dispatch) => {
    
    axios.get(`https://api.github.com/users`)
        .then(response => {
            const users = response.data;

            dispatch({
                type: FETCH_ALL_PRODUCTS,
                payload: users
            })
        })
        .catch(error => console.log(error))
}

// fetch single product
export const fetchProduct = () => {}