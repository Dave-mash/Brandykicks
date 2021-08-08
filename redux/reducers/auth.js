const initialState = {
    user: null,
    isLoggedIn: null
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USER':
        case 'SET_USER':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}