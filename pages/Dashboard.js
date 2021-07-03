import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../redux/actions/products';

import HeaderSlider from '../components/home/HeaderSlider';
import Services from '../components/home/Services';
import NewArrivals from '../components/home/NewArrivals';
import styles from '../styles/Home.module.css';
import BottomNav from '../components/BottomNav';


const Dashboard = ({ products, fetchAllProducts }) => {
    useEffect(() => {
        fetchAllProducts()
        console.log('Github users: ', products);
    }, []);
    return (
        <main className={styles.main}>
            <HeaderSlider />
            <Services />
            <NewArrivals />
            <BottomNav />
        </main>
    )
}

const mapStateToProps = ({ products }) => ({
    products: products.productsList,
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllProducts: () => dispatch(fetchAllProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

/*

*/