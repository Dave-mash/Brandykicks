import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import products from './products';
import cart from './cart';
import filters from './filters';
import wishlist from './wishlist';
import auth from './auth';


const combinedReducer = combineReducers({
    products,
    cart,
    wishlist,
    auth,
    filters
})

const reducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        case 'SERVER_ACTION':
            return {
                ...state,
                server: {
                    ...state.server,
                    tick: action.payload
                }
            };
        case 'CLIENT_ACTION':
            return {
                ...state,
                client: {
                    ...state.client,
                    tick: action.payload
                }
            };
        default:
            return combinedReducer(state, action);
    }
};

export default reducer;