const initialState = {
    productsList: [{
        id: 'abc1',
        title: 'AIR JORDAN 1 DIOR',
        price: '4500',
        brand: 'JORDAN',
        imgUrl: '/sample4.jpg',
        imgAlt: 'Air Jordan 1 Dior'
    },{
        id: 'abc2',
        title: 'ADIDAS SAMOA',
        price: '5000',
        brand: 'ADIDAS',
        imgUrl: '/sample5.jpg',
        imgAlt: 'Adidas Samoa'
    },{
        id: 'abc3',
        title: 'ADIDAS LIFESTYLE',
        price: '3200',
        brand: 'ADIDAS',
        imgUrl: '/sample2.jpg',
        imgAlt: 'Adidas lifestyle'
    },{
        id: 'abc4',
        title: 'PUMA BLACK RIDER',
        price: '3500',
        brand: 'JORDAN',
        imgUrl: '/sample3.jpg',
        imgAlt: 'Puma Black'
    }]
};

export default function products(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}