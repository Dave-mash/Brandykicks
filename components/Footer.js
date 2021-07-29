import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { useFormik } from 'formik';

import { SubscriptionSchema } from '../utils/FormValidation';
import styles from '../styles/components/Footer.module.css';


const Footer = () => {
    const formik = useFormik({
        initialValues: { email: '' },
        validationSchema: SubscriptionSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(true);
        },
    });

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerInfo}>
                    <div className={`${styles.brandykicksDetails} ${styles.dsk}`}>
                        <Image src="/logo.png" alt="Brandykicks logo" width={118} height={92} layout="intrinsic" className={styles.brandykicksLogo} />
                        <div className={styles.contactNumber}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={styles.telephone}></FontAwesomeIcon>
                            <p>+254 714 026472</p>
                        </div>
                        <p className={styles.brandykicksInfo}>BrandyKicks deals with imported original Shoes directly from the brand supplier.We deliver shoes all across the country.</p>
                    </div>
                    <div className={`${styles.brandykicksDetails} ${styles.mb}`}>
                        <Image src="/logo.png" alt="Brandykicks logo" width={80} height={70} layout="intrinsic" className={styles.brandykicksLogo} />
                        <div className={styles.contactNumber}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={styles.telephone}></FontAwesomeIcon>
                            <p>+254 714 026472</p>
                        </div>
                        <p className={styles.brandykicksInfo}>BrandyKicks deals with imported original Shoes directly from the brand supplier.We deliver shoes all across the country.</p>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.getInTouchSection}>
                            <p className={styles.getInTouch}>GET IN TOUCH</p>
                            <div className={styles.sectionDetails}>
                                <p>Address: Nairobi, Kenya</p>
                                <p>Telephone Inquiry: +254 714 026472</p>
                                <p>Email: info@brandykicks.co.ke</p>
                            </div>
                        </div>
                        <div className={styles.openingTime}>
                            <p className={styles.openingTimeText}>OPENING TIME</p>
                            <div className={styles.sectionDetails}>
                                <p>Open: 8:00 AM – Close: 18:00 PM</p>
                                <p>Saturday – Sunday: Close</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.socialsWrapper}>
                            <p className={styles.getInTouch}>FOLLOW US</p>
                            <div className={styles.socialIcons}>
                                <FontAwesomeIcon icon={faFacebookF} className={styles.footerSocialBrand}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faInstagram} className={styles.footerSocialBrand}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faTwitter} className={styles.footerSocialBrand}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faWhatsapp} className={styles.footerSocialBrand}></FontAwesomeIcon>
                            </div>
                        </div>
                        <form onSubmit={formik.handleSubmit} className={styles.footerNewsLetter}>
                            <p>New to BrandyKicks? Subscribe to our newsletter so you can get updates on our latets offers</p>
                            <input
                                placeholder="Enter email"
                                name="email"
                                className={styles.newsLetterInput}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                // helperText={formik.touched.email && formik.errors.email}
                            />
                            <button
                                className={styles.newsLetterBtn}
                                type="submit"
                            >Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div className={styles.copyrightContainer}>
                        <p>Copyright © {(new Date().getFullYear())}. All Right Reserved.</p>
                        <p>Designed and Developed by <a href="https://www.linkedin.com/in/david-mwangi-78622b174" target="_blank" rel="noopener noreferrer">David Macharia.</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;