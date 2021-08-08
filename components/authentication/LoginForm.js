import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import { useCookies } from "react-cookie";
import { connect } from 'react-redux';

import { LoginSchema } from '../../utils/FormValidation';
import { signIn } from '../../redux/actions/auth';
import styles from '../../styles/Login.module.css';


const theme = createMuiTheme({
    TextField: {
        fontSize: 20,
    }
});

const LoginForm = ({ signIn }) => {
    const [cookie, setCookie] = useCookies(["user"]);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: LoginSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            signIn(values, setCookie);
            setSubmitting(false);
        },
    });

    return (
        <div className={styles.LoginForm}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
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
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 0'
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <input
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            style={{
                                marginRight: '.5rem'
                            }}
                        /> Remember me?
                    </span>
                    <Link href="/">Forgot password?</Link>
                </div>
                <div className={styles.socialMediaAuth}>
                    <h4>Log in with:</h4>
                    <span className={styles.socialIcons}>
                        <FontAwesomeIcon icon={faFacebook} className={`${styles.socialBrand} ${styles.fb}`}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGooglePlus} className={`${styles.socialBrand} ${styles.google}`}></FontAwesomeIcon>
                    </span>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signIn: (values, setCookie) => dispatch(signIn(values, setCookie))
})

export default connect(null, mapDispatchToProps)(LoginForm);