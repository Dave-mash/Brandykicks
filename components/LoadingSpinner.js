import CircularProgress from '@material-ui/core/CircularProgress';

import styles from '../styles/components/home/NewArrivals.module.css';


const LoadingSpinner = () => (
    <div className={styles.loadingBanner}>
        <div className={styles.loadingBanner}><CircularProgress /></div>
    </div>
);

export default LoadingSpinner;