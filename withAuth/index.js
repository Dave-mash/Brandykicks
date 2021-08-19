import { Component } from 'react';

import LoadingSpinner from '../components/LoadingSpinner';
import fire from '../firebase/config';
import Unauthorized from '../components/Unauthorized';


const withAuth = (AuthComponent) => {
    return class Authenticated extends Component {
        constructor(props) {
            super(props);

            this.state = {
                isLoading: true,
                isLoggedIn: false,
                displayName: null,
                email: null
            };
        }

        componentDidMount() {
            console.log('props: ',this.props);
            fire.auth().onAuthStateChanged(user => {
                if (!user) {
                    // User is signed out
                    const creds = {
                        isLoggedIn: false,
                        displayName: null,
                        phoneNumber: null,
                        email: null
                    }

                    this.setState({
                        ...creds,
                        isLoading: false
                    });

                    // set resMsg prompt
                    // ...
                    this.props.router.push("/account/Authentication");
                } else {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User

                    const {
                        isLoggedIn,
                        displayName,
                        phoneNumber,
                        email
                    } = user;

                    this.setState({
                        isLoggedIn,
                        displayName,
                        phoneNumber,
                        email,
                        isLoading: false
                    });
                }
            });
        }

        render() {
            return (
                <>
                    {
                        this.state.isLoading ? (
                            <LoadingSpinner />
                        ) : (
                                <AuthComponent props={this.props} />
                            )
                    }
                </>
            );
        }
    }
};


export default withAuth;