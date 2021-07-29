const initialState = {
    cartList: []
};

export default function products(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CART':
            return {
                ...state,
                cartList: action.payload
            }
        default:
            return state
    }
}