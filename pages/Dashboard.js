import HeaderSlider from '../components/home/HeaderSlider';
import Services from '../components/home/Services';
import NewArrivals from '../components/home/NewArrivals';
import styles from '../styles/Home.module.css';
import BottomNav from '../components/BottomNav';

import { connect } from 'react-redux';


const Dashboard = ({ msg }) => {
    console.log('msg ---> ', msg)
    return (
        <main className={styles.main}>
            <HeaderSlider />
            <Services />
            <NewArrivals />
            <BottomNav />
        </main>
    )
}

const mapStateToProps = (state) => ({
    msg: state.example.msg,
})

export default connect(mapStateToProps)(Dashboard);