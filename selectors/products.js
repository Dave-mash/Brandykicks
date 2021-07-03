export default function filterProducts(products, { text, sortBy }) {
    const filteredItems = !!products.length ? products.filter(
        product => product.title.toLowerCase().includes(text.toLowerCase())
        ).sort((a, b) => {
            if (sortBy === 'price') {
                return a.price > b.price ? 1 : -1;
            }
        }) : products;
        
    console.log('Filtered =>: ', filteredItems)
    return filteredItems
};