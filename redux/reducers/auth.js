const initialState = {
    email: null,
    displayName: null,
    isLoggedIn: false
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USER':
        case 'SET_USER':
            return {
                ...state,
                ...action.payload
            }
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
}