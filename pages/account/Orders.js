import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { useRouter } from 'next/router';
import Link from "next/link";

import Layout from '../../components/Layout';
import BottomNav from '../../components/BottomNav';
import AccountOptions from '../../components/AccountOptions';
import styles from '../../styles/Profile.module.css';


const theme = createMuiTheme({
    typography: {
        fontSize: 20,
    }
});

const Orders = () => {
    const router = useRouter();

    const handleLogout = () => {
        router.replace('/');
        logout();
    }

    return (
        <>
            <Layout>
                <div className={styles.profileContainer}>
                    <ThemeProvider theme={theme}>
                        <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
                            <Link color="inherit" href="/">Home</Link>
                            <Typography color="textPrimary">Profile</Typography>
                        </Breadcrumbs>
                    </ThemeProvider>
                    <div className={styles.profileWrapper}>
                        <div className={styles.profileOptions}>
                            <h1>My Account</h1>
                            <AccountOptions />
                        </div>
                        <div className={styles.profileDetails}>
                            <Card variant="outlined">
                                <h2>Orders</h2>
                            </Card>
                        </div>
                    </div>
                </div>
            </Layout>
            <BottomNav />
        </>
    )
};

export default Orders;