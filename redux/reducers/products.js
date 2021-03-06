const initialState = {
    productsList: []
};

export default function products(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL_PRODUCTS':
            return {
                ...state,
                productsList: action.payload
            }
        default:
            return state
    }
}