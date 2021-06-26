import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Authentication from './account/Authentication';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Account.module.css';


const Account = () => {
    const router = useRouter()
    const { pid } = router.query

    console.log('pid: ', pid)
    return (
        <div className={styles.accountContainer}>
            <Layout>
                <div className={styles.account}>
                    <Authentication />
                </div>
            </Layout>
            <BottomNav />
        </div>
    )
}

export default Account;