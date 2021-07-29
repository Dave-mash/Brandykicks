import HeaderSlider from '../components/home/HeaderSlider';
import Services from '../components/home/Services';
import NewArrivals from '../components/home/NewArrivals';
import styles from '../styles/Home.module.css';
import BottomNav from '../components/BottomNav';


const Dashboard = () => (
    <main className={styles.main}>
        <HeaderSlider />
        <Services />
        <NewArrivals />
        <BottomNav />
    </main>
)


export default Dashboard;