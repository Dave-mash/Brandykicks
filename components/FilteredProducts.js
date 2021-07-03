import { connect } from 'react-redux';

import FilterProductItem from './FilteredProductItem';
import filterProducts from '../selectors/products';
import styles from '../styles/components/home/HeaderSlider.module.css';


const FilteredProducts = ({ products }) => (
    <ul className={styles.searchOptions}>
        {
            products.map(
                product => (
                    <FilterProductItem
                        key={product.id} {...product}
                    />
                )
            )
        }
    </ul>
)

const mapStateToProps = ({ products, filters }) => ({
    products: filterProducts(products.productsList, filters)
});

export default connect(mapStateToProps)(FilteredProducts);