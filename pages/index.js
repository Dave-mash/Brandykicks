import Head from 'next/head';

import Dashboard from './Dashboard';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Brandykicks Kenya</title>
        <meta name="description" content="Always keeping your feet plugged." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Dashboard />
      </Layout>
    </div>
  )
}


export default Home;