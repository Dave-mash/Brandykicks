const initialState = {
    list: null
};

export default function wishlist(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_WISHLIST':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}