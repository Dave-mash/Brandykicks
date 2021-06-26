import React from 'react';

import RegisterForm from '../../components/authentication/RegisterForm';
import LoginForm from '../../components/authentication/LoginForm';
import styles from '../../styles/Authentication.module.css';


const Authentication = () => (
    <div className={styles.authenticationContainer}>
        <h1>My Account</h1>
        <div className={styles.authentication}>
            <div className={styles.register}>
                <h2 className={styles.authTitle}>LOGIN</h2>
                <LoginForm />
            </div>
            <div className={styles.login}>
                <h2 className={styles.authTitle}>REGISTER</h2>
                <RegisterForm />
            </div>
        </div>
    </div>
);

export default Authentication;