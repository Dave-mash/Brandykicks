import { connect } from 'react-redux';

import NavBar from './NavBar';
import { fetchAllProducts } from '../redux/actions/products';
import Footer from './Footer';
import { wp_url } from '../config';
import styles from '../styles/components/Layout.module.css';


const Layout = ({ children, fetchAllProducts }) => {
    fetchAllProducts();

    return (
        <div className={styles.layout}>
            <NavBar />
            { children}
            <Footer />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    fetchAllProducts: () => dispatch(fetchAllProducts())
})

export default connect(null, mapDispatchToProps)(Layout);