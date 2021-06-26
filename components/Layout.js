import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div styles={{ width: '100%' }}>
        <NavBar />
        { children}
        <Footer />
    </div>
);

export default Layout;