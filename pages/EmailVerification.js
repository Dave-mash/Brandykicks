import Link from 'next/link';
import { connect } from 'react-redux';


const EmailVerification = ({ email }) => {
    return (
        <>
            <h1>Verify your email</h1>
            <p>An email was sent to {email} to verify your email address and activate your account. The link in the email will expire after 24 hours.</p><br />
            <p><Link href="/">Click here</Link> If you did not receive an email or would like to change the email address you signed in with.</p>
        </>
    );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(EmailVerification);