import axios from 'axios';
import { getSession } from 'next-auth/client'

import {
    FETCH_USER,
    SET_USER
} from './types';


// fetch user
export const fetchUser = (data = null) => dispatch => {
    console.log('Valid cookie!', data);

    if (!data) {
        getSession().then(res => {
            const user = !!res ? res.user : {};
            const payload = {
                user,
                isLoggedIn: !!Object.keys(user).length
            }

            dispatch({
                type: FETCH_USER,
                payload
            })
        });
    } else {
        const payload = {
            user: data.user,
            isLoggedIn: !!Object.keys(user).length
        }

        dispatch({
            type: FETCH_USER,
            payload
        })
    }
}

export const signIn = (user, setCookie) => dispatch => {
    try {
        // send data to backend
        // ...
        
        const strUser = JSON.stringify(user);
        console.log('user: ',strUser);

        setCookie("user", strUser, {
            path: "/",
            maxAge: (3600 * 24 * 30), // Expires after 30dys
            sameSite: true,
        });
    
        const payload = {
            user,
            isLoggedIn: true
        }
    
        dispatch({
            type: SET_USER,
            payload
        })
    } catch(e) {
        console.log('Error: ',e);
    }
}