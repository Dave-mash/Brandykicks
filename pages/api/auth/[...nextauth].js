import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"

import firebase from "firebase/app"
import "firebase/firestore"


const firestore = (
    firebase.apps[0] ?? firebase.initializeApp({
        apiKey: process.env.API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
    })
).firestore();

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
    // https://next-auth.js.org/configuration/providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        Providers.Credentials({
            name: 'Credentials',
            authorize: async (credentials) => {

                // Add logic here to look up the user from the credentials supplied
                const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error('error message') // Redirect to error page
                    // throw '/path/to/redirect'        // Redirect to a URL
                }
            }
        }),
    ],
    callbacks: {
        // Getting the JWT token from API response
        async jwt(token, user) {
            if (user) {
                token.accessToken = user.token
            }

            return token
        },

        async session(session, token) {
            session.accessToken = token.accessToken
            return session
        }
    },
    adapter: FirebaseAdapter(firestore),
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // 30 days
    }
})