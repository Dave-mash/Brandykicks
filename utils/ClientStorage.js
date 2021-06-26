/**
 * This file contains the client storage class
 */


export default class clientStorage {

    // create and set cookie values
    setCookie(cname, cvalue, exdays) {
        let d = new Date();

        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // add secure flag in prod env
    }

    // fetch cookie values
    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // delete a cookie
    eraseCookie(cname = 'token') {
        document.cookie = cname + '=; Max-Age=-99999999;';
    }

    // check for an existing cookie
    checkCookie(cname) {
        let user = this.getCookie(cname);
        if (user != "") {
            // Check if token is still valid - onload
            // check if the token exists in the database
            // Automatically log in the user
        } else {
            // logout user
        }
    }
}