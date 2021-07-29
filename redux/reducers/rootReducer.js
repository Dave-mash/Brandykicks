import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import products from './products';
import cart from './cart';
import filters from './filters';


const combinedReducer = combineReducers({
    products,
    cart,
    filters
})

const reducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                server: {
                    ...state.server,
                    ...action.payload.server
                }
            }
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