import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import {
    useSession,
    signIn,
    signOut
} from 'next-auth/client'
import { connect } from 'react-redux';
import { useRouter } from 'next/router'

import { RegisterSchema } from '../../utils/FormValidation';
// import ClientStorage from '../../utils/ClientStorage';
import styles from '../../styles/Register.module.css';


const useStyles = makeStyles({
    typography: {
        fontSize: 50,
    }
});

const RegisterForm = () => {
    const classes = useStyles();
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: ''
        },
        validationSchema: RegisterSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            const res = await signIn('credentials',
                {
                    ...values,
                    redirect: false
                    // callbackUrl: `${window.location.origin}`
                })

            if (res.url) router.replace(res.url);
            console.log('token: ', res)
        },
    });

    return (
        <div className={styles.registerForm}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    className={classes.typography}
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                    fullWidth
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone number"
                    type="number"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                /><br /><br /><br />
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                >Submit</Button>
                <div className={styles.socialMediaAuth}><br />
                    <h4>Register in with:</h4>
                    <span className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faFacebook} className={`${styles.socialBrand} ${styles.fb}`}></FontAwesomeIcon>
                        <FontAwesomeIcon
                            icon={faGooglePlus}
                            className={`${styles.socialBrand} ${styles.google}`}
                            onClick={() => {
                                signIn('google', { callbackUrl: 'http://localhost:3000/' })
                            }}
                        ></FontAwesomeIcon>
                        <button onClick={() => signOut()}>Sign out</button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;