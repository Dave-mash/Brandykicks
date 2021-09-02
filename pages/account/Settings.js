import { connect } from 'react-redux';
import { withRouter, useRouter } from 'next/router';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Link from "next/link";
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';

import { RegisterSchema } from '../../utils/FormValidation';
import Layout from '../../components/Layout';
import BottomNav from '../../components/BottomNav';
import AccountOptions from '../../components/AccountOptions';
import styles from '../../styles/Profile.module.css';


const theme = createMuiTheme({
    typography: {
        fontSize: 20,
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    typography: {
        fontSize: 50,
    }
}));

const Settings = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        validationSchema: RegisterSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            registerUser(values);
            resetForm();
            setSubmitting(false);
        },
    });

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
                                <div className={styles.profileDetailsWrapper}>
                                    <h2>Settings</h2><br />
                                    <form onSubmit={formik.handleSubmit} className={`${classes.root} ${styles.profileInfo}`}>
                                        <TextField
                                            className={classes.typography}
                                            variant="outlined"
                                            type="password"
                                            id="outlined-password-input"
                                            autoComplete="current-password"
                                            name="currentPassword"
                                            label="Current Password"
                                            value={formik.values.currentPassword}
                                            onChange={formik.handleChange}
                                            error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
                                            helperText={formik.touched.currentPassword && formik.errors.currentPassword}
                                        />
                                        <TextField
                                            className={classes.typography}
                                            variant="outlined"
                                            type="password"
                                            id="outlined-password-input"
                                            autoComplete="current-password"
                                            name="newPassword"
                                            label="New Password"
                                            value={formik.values.newPassword}
                                            onChange={formik.handleChange}
                                            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                                            helperText={formik.touched.newPassword && formik.errors.newPassword}
                                        />
                                        <TextField
                                            className={classes.typography}
                                            variant="outlined"
                                            type="password"
                                            id="outlined-password-input"
                                            autoComplete="current-password"
                                            name="confirmPassword"
                                            label="Confirm password"
                                            value={formik.values.confirmPassword}
                                            onChange={formik.handleChange}
                                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        /><br /><br /><br />
                                        <Button
                                            disabled={formik.isSubmitting}
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                        >{formik.isSubmitting ? <div className={styles.loadingBanner}><CircularProgress /></div> : 'Update'}</Button>
                                    </form>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Layout>
            <BottomNav />
        </>
    )
}

export default Settings;