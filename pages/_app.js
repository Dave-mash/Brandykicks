import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import App from 'next/app';

import { parseCookies } from '../utils';
import { wrapper } from '../redux/store';
import { fetchUser } from '../redux/actions/auth';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';


config.autoAddCss = false;

class MyApp extends App {
	componentDidMount() {

	}
	// getInitialProps allows for initial data population
	// getInitialProps will disable Automatic Static Optimization.

	static getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
		const req = ctx.req;
		const res = ctx.res;
		const data = parseCookies(req);

		try {
			// check if cookie is valid
			if (res) {
				if (Object.keys(data).length === 0 && data.constructor === Object) {
					res.writeHead(301, { Location: "/" })
					res.end()
					fetchUser();
					console.log('Invalid cookie!')
				} else {
					fetchUser(data);
				}
			}

			//Anything returned here can be accessed by the client

			return {
				pageProps: {
					// Call page-level getInitialProps
					// PROVIDE STORE TO PAGE
					...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
				}
			};
		} catch (e) {
			console.log('ERROR => ', e);
		}
	});

	render() {
		// Information that was returned from 'getInitialProps' are stored in the props i.e. pageProps
		const { Component, pageProps } = this.props;

		return <Component {...pageProps} />;
	}
}

export default wrapper.withRedux(MyApp);

/*

Server side redux:

https://redux.js.org/recipes/server-rendering/#redux-on-the-server

*/