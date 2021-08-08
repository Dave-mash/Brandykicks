import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/client';

import Layout from '../components/Layout';
import Authentication from './account/Authentication';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Account.module.css';


const Account = ({ csrfToken }) => {
    const router = useRouter()
    const { pid } = router.query;
    const stringToken = JSON.stringify({ csrfToken });
    
    if (typeof window !== "undefined") {
        localStorage.setItem('token', stringToken)
    }

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

export const getServerSideProps = async (context) => {
    const csrfToken = await getCsrfToken(context)

    return {
        props: { csrfToken }
    }
}

export default Account;