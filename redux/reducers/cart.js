const initialState = {
    cartList: null
};

export default function cart(state = initialState, action) {
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