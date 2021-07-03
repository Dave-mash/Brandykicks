const defaultState = {
    text: '',
    searching: false
};

export default function filters(state = defaultState, action) {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'BLUR_RESULTS':
            return {
                ...state,
                searching: false
            }
        case 'FOCUS_RESULTS':
            return {
                ...state,
                searching: true
            }
        case 'HIDE_RESULT':
            return {
                ...state,
                text: ''
            }
        default:
            return state;
    }
};