import axios from 'axios';
import Cookies from 'js-cookie';

import {
    FETCH_USER,
    SET_USER,
    LOGOUT
} from './types';
import fire from '../../firebase/config';


// fetch user
export const fetchUser = () => dispatch => {
    const cookie = Cookies.get('user');

    if (!cookie) {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                const { email, displayName } = user;
                console.log('user from firebase! ', { email, displayName });
                const payload = { displayName, email }
                const strUser = JSON.stringify(payload);

                payload.isLoggedIn = true;

                dispatch({
                    type: FETCH_USER,
                    payload
                })

                Cookies.set('user', strUser, { expires: 30 });
            } else {
                dispatch({
                    type: FETCH_USER,
                    payload: {
                        email: null,
                        displayName: null,
                        isLoggedIn: false
                    }
                })
            }
        });
    } else {
        const user = JSON.parse(cookie);
        const payload = {
            ...user,
            isLoggedIn: true
        }

        dispatch({
            type: FETCH_USER,
            payload
        })
    }
}

export const signIn = (user) => dispatch => {
    const { email, password } = user;

    fire.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const credentials = userCredential.user;
            const { email, displayName } = credentials;
            const payload = { displayName, email }
            const strUser = JSON.stringify(payload);

            console.log('auth user: ', user);

            payload.isLoggedIn = true;

            dispatch({
                type: SET_USER,
                payload
            })

            Cookies.set('user', strUser, { expires: 30 });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('err: ', error);
            console.log('code: ', errorCode);
            console.log('Msg: ', errorMessage);

            switch (errorCode) {
                case 'auth/user-not-found':
                    return 'No user was found. Register?';
            }
        });
}

export const registerUser = (details) => dispatch => {
    const { email, password, firstName } = details;

    // save user
    fire.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const credentials = userCredential.user;
            const sendEmail = credentials.sendEmailVerification();
            const updateProfile = credentials.updateProfile({ displayName: firstName });
            Promise.all([sendEmail, updateProfile]).then(() => {
                const { email, displayName } = credentials;
                const payload = { displayName, email }
                const strUser = JSON.stringify(payload);

                payload.isLoggedIn = true;

                dispatch({
                    type: SET_USER,
                    payload
                })

                Cookies.set('user', strUser, { expires: 30 });
                window.location.replace('/EmailVerification')
            }).catch(error => console.log('error: ',error));
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            switch (errorCode) {
                case 'auth/email-already-in-use':
                    return 'Email already in use!';
            }
            console.log('Error: ', error)

            console.log('errCode: ', errorCode, '\n', 'errorMsg: ', errorMessage);
        });
}

export const logout = () => dispatch => {
    fire.auth().signOut()
        .then(() => {
            Cookies.remove('user', { path: '' });
            dispatch({ type: LOGOUT });
        }).catch((err) => {
            console.log(err);
        });
}