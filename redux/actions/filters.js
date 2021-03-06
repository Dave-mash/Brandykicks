// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByPrice = (order) => ({
    type: 'SORT_BY_PRICE',
    order
});

// ON_CLICK_RESULT
export const clickResult = () => ({ type: 'CLICK_RESULT' });

// HIDE_RESULT
export const hideResult = () => ({ type: 'HIDE_RESULT' });

// ON_FOCUS
export const focusResults = () => ({ type: 'FOCUS_RESULTS' });

// ON_BLUR
export const blurResults = () => ({ type: 'BLUR_RESULTS' });