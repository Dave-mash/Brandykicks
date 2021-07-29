export default function filterProducts(products, { text, sortBy }) {
    const filteredItems = !!products.length ? products.filter(
        product => product.title.rendered.toLowerCase().includes(text.toLowerCase())
    ).sort((a, b) => {
        switch(sortBy) {
            case 'priceAscending':
                return a.price > b.price ? 1 : -1;
            case 'priceDescending':
                return a.price > b.price ? -1 : 1;
        }
    }) : products;

    return filteredItems
};