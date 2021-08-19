import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import App from 'next/app';

import { wrapper } from '../redux/store';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import { fetchUser } from "../redux/actions/auth";
import fire from '../firebase/config';


config.autoAddCss = false;

class MyApp extends App {
	// getInitialProps allows for initial data population
	// getInitialProps will disable Automatic Static Optimization.
	componentDidMount() {
		console.log('==> ',this.props);
	}

	static getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
		try {
			const state = store.getState();
			const isLoggedIn = state.auth.isLoggedIn;
			
			!isLoggedIn && store.dispatch(fetchUser());

			//Anything returned here can be accessed by the client

			return {
				pageProps: {
					// Call page-level getInitialProps
					// PROVIDE STORE TO PAGE
					...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
					// Some custom thing for all pages
					pathname: ctx.pathname,
				}
			};
		} catch (e) {
			console.log('ERROR => ', e);
		}
	});

	render() {
		// Information that was returned from 'getInitialProps' are stored in the props i.e. pageProps
		const { Component, pageProps } = this.props;

		return <Component {...pageProps} />
	}
}

export default wrapper.withRedux(MyApp);

/*

Server side redux:

https://redux.js.org/recipes/server-rendering/#redux-on-the-server

*/