import { connect } from 'react-redux';
import { withRouter, useRouter } from 'next/router';

import { logout } from '../redux/actions/auth';
import withAuth from '../withAuth';
import Layout from '../components/Layout';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Profile.module.css';

const Profile = ({ auth, logout }) => {
    const router = useRouter();
    const {
        email,
        displayName,
        isLoggedIn
    } = auth;

    const handleLogout = () => {
        router.replace('/');
        logout();
    }

    return (
        <>
            <Layout>
                <h1>Profile page</h1>
                <button onClick={() => handleLogout()}>Logout</button>
            </Layout>
            <BottomNav />
        </>
    )
}

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

const enhance = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default withRouter(withAuth(enhance));