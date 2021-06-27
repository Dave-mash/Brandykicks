import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/components/Layout.module.css'

const Layout = ({ children }) => (
    <div className={styles.layout}>
        <NavBar />
        { children}
        <Footer />
    </div>
);

export default Layout;