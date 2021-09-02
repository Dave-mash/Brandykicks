import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Link from "next/link";
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';

import { RegisterSchema } from '../../utils/FormValidation';
import withAuth from '../../withAuth';
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

const Profile = ({ auth, logout }) => {
    const classes = useStyles();
    const {
        email,
        displayName,
        isLoggedIn
    } = auth;

    const formik = useFormik({
        initialValues: {
            firstName: 'Dave',
            lastName: 'Mash',
            email: 'mash@gmail.com'
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
                                    <h2>My Details</h2>
                                    <p className={styles.personalInfo}><strong>Personal Information</strong></p>
                                    <form onSubmit={formik.handleSubmit} className={`${classes.root} ${styles.profileInfo}`}>
                                        <TextField
                                            className={classes.typography}
                                            variant="outlined"
                                            id="firstName"
                                            name="firstName"
                                            label="First name"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                            helperText={formik.touched.firstName && formik.errors.firstName}
                                        />
                                        <TextField
                                            className={classes.typography}
                                            variant="outlined"
                                            id="lastName"
                                            name="lastName"
                                            label="Last name"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                            helperText={formik.touched.lastName && formik.errors.lastName}
                                        />
                                        <TextField
                                            className={classes.typography}
                                            variant="outlined"
                                            id="email"
                                            name="email"
                                            label="Email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                            disabled
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

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

const enhance = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default withRouter(withAuth(enhance));