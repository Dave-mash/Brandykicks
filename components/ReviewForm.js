import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { ReviewSchema } from '../utils/FormValidation';
import styles from '../styles/components/ReviewForm.module.css';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ReviewForm = () => {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email: '',
            review: '',
            rememberMe: false
        },
        validationSchema: ReviewSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log('JSON.stringify(values, null, 2)');
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(true);
        },
    });

    return (
        <div className={styles.reviewFormContainer}>
            <h3>ADD REVIEW</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <p>Your rating</p>
            <div className={styles.stars}>
                <Box component="fieldset" borderColor="transparent">
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Box>
            </div>
            <form onSubmit={formik.handleSubmit} className={styles.reviewForm}>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    id="review"
                    name="review"
                    label="Review *"
                    variant="outlined"
                    // value={formik.values.review}
                    // onChange={formik.handleChange}
                    error={formik.touched.review && Boolean(formik.errors.review)}
                    helperText={formik.touched.review && formik.errors.review}
                /><br /><br />
                <TextField
                    fullWidth
                    rows={4}
                    id="name"
                    name="name"
                    label="Name *"
                    variant="outlined"
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                /><br /><br />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email *"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                /><br /><br />
                <Button
                    // fullWidth
                    color="primary"
                    variant="contained"
                    type="submit"
                >Submit</Button>
            </form>
        </div>
    )
}

export default ReviewForm;