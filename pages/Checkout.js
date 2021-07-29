import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import { green } from '@material-ui/core/colors';
import { useFormik } from 'formik';

import { CheckoutSchema } from '../utils/FormValidation';
import Layout from '../components/Layout';
import BottomNav from '../components/BottomNav';
import styles from '../styles/Checkout.module.css';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: '8px 0',
        },
    },
    formHorizontal: {
        display: 'flex',
        fontSize: 50,
        justifyContent: 'space-between'
    },
    horizontalInputForm: {
        width: '48%'
    },
    typography: {
        fontSize: 50,
    },
    imageButton: {
        padding: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white'
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: green
    },
});

const Checkout = () => {
    const [value, setValue] = React.useState('');
    const [checkboxValue, setCheckboxValue] = React.useState({ terms: false });
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            country: '',
            phoneNumber: '',
            streetAddress: '',
            payment: ""
        },
        validationSchema: CheckoutSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log('JSON.stringify(values, null, 2)');
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(true);
        },
    });
    console.log('formik: ',formik)

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setCheckboxValue({ ...checkboxValue, [event.target.name]: event.target.checked });
    };

    return (
        <div className={styles.checkoutContainer}>
            <Layout>
                <div className={styles.checkout}>
                    <h1>Checkout</h1>
                    <form onSubmit={formik.handleSubmit} className={styles.billing}>
                        <div className={styles.billingDetails}>
                            <div className={styles.billingForm}>
                                <h2>BILLING DETAILS</h2>
                            </div><br />
                            <div className={`${classes.root} ${styles.checkoutForm}`}>
                                <div className={classes.formHorizontal}>
                                    <TextField
                                        className={classes.horizontalInputForm}
                                        required
                                        label="First Name"
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                    />
                                    <TextField
                                        className={classes.horizontalInputForm}
                                        required
                                        label="Last Name"
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                    />
                                </div>
                                <TextField
                                    className={classes.typography}
                                    fullWidth
                                    required
                                    id="country"
                                    name="country"
                                    label="Country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    error={formik.touched.country && Boolean(formik.errors.country)}
                                    helperText={formik.touched.country && formik.errors.country}
                                />
                                <TextField
                                    className={classes.typography}
                                    fullWidth
                                    required
                                    id="streetAddress"
                                    name="streetAddress"
                                    label="House number and street name"
                                    type="streetAddress"
                                    value={formik.values.streetAddress}
                                    onChange={formik.handleChange}
                                    error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
                                    helperText={formik.touched.streetAddress && formik.errors.streetAddress}
                                />
                                <TextField
                                    className={classes.typography}
                                    fullWidth
                                    required
                                    id="city"
                                    name="city"
                                    label="Town / City"
                                    type="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
                                />
                                <TextField
                                    className={classes.typography}
                                    fullWidth
                                    required
                                    id="county"
                                    name="county"
                                    label="State / County"
                                    type="county"
                                    value={formik.values.county}
                                    onChange={formik.handleChange}
                                    error={formik.touched.county && Boolean(formik.errors.county)}
                                    helperText={formik.touched.county && formik.errors.county}
                                />
                                <TextField
                                    className={classes.typography}
                                    fullWidth
                                    id="postCode"
                                    name="postCode"
                                    label="Postcode / ZIP (Optional)"
                                    type="postCode"
                                    value={formik.values.postCode}
                                    onChange={formik.handleChange}
                                    error={formik.touched.postCode && Boolean(formik.errors.postCode)}
                                    helperText={formik.touched.postCode && formik.errors.postCode}
                                />
                                <TextField
                                    className={classes.typography}
                                    fullWidth
                                    required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone number"
                                    type="number"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                />
                                <TextField
                                    className={classes.typography}
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                /><br /><br />
                            </div>
                        </div>
                        <div className={styles.orderDetails}>
                            <div className={styles.myOrderContainer}>
                                <div className={styles.myOrderTitle}>
                                    <h2>YOUR ORDER</h2>
                                </div>
                                <div className={styles.myOrder}>
                                    <div className={styles.product}>
                                        <p>PRODUCT</p>
                                        <p>TOTAL</p>
                                    </div>
                                    <div className={styles.shoe}>
                                        <p>AIR JORDAN 1 DIOR<span>x 1</span></p>
                                        <p>KSH 4,500.00</p>
                                    </div>
                                    <div className={styles.shoe}>
                                        <p>ADIDAS SAMOA<span>x 1</span></p>
                                        <p>KSH 3,500.00</p>
                                    </div>
                                    <div className={styles.shoe}>
                                        <p>ADIDAS LIFESTYLE<span>x 1</span></p>
                                        <p>KSH 3,200.00</p>
                                    </div>
                                    <div className={styles.subtotal}>
                                        <p>SUBTOTAL</p>
                                        <p>KSH 11,200.00</p>
                                    </div>
                                    <div className={styles.shipping}>
                                        <p>SHIPPING</p>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="shipping" name="shipping" value={value} onChange={handleRadioChange}>
                                                <FormControlLabel className={classes.typography} value="cbd" control={<Radio color="primary" />} label="CBD(KENYA) KSH 200" />
                                                <FormControlLabel className={classes.typography} value="local" control={<Radio color="primary" />} label={`Local shipping KSH 300`} />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className={styles.total}>
                                        <p>TOTAL</p>
                                        <p className={styles.totalPayment}>KSH 11,600.00</p>
                                    </div>
                                    <div className={styles.paymentDetails}>
                                        <div className={styles.mpesa}>
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="paymentDetails" name="paymentDetails" value={value} onChange={handleRadioChange}>
                                                    <FormControlLabel className={classes.typography} value="mpesa" control={<Radio color="primary" />} label="MPESA" />
                                                    <p className={styles.mpesaPaymentInfo}>Make payments with your phone directly via mpesa</p>
                                                    <FormControlLabel className={classes.typography} value="paypal" control={<Radio color="primary" />} label="PAYPAL" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div><br />
                                        <p>Your personal information will be used to process this order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                        <span className={styles.terms}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        defaultChecked
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                }
                                                label="I have read and agreed to terms and conditions"
                                            />
                                        </span>
                                    </div>
                                    <ThemeProvider theme={theme}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.imageButton}
                                        >PLACE ORDER</Button>
                                    </ThemeProvider>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
            <BottomNav />
        </div>
    )
}

export default Checkout;