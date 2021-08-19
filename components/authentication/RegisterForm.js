import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';

import { RegisterSchema } from '../../utils/FormValidation';
import { registerUser } from '../../redux/actions/auth';
import styles from '../../styles/Register.module.css';


const useStyles = makeStyles({
    typography: {
        fontSize: 50,
    }
});

const RegisterForm = ({ registerUser }) => {
    const router = useRouter();
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
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
                            onClick={() => null}
                        ></FontAwesomeIcon>
                    </span>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    registerUser: (values) => dispatch(registerUser(values))
});

export default connect(null, mapDispatchToProps)(RegisterForm);