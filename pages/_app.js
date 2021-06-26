import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { wrapper } from '../redux/store';
import App from 'next/app';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

config.autoAddCss = false;

class MyApp extends App {
	// getInitialProps allows for initial data population
	// getInitialProps will disable Automatic Static Optimization.
	static getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {

		// store.dispatch({ type: 'FOO', payload: 'foo' });
		console.log('store =======> ',store.getState())

		//Anything returned here can be accessed by the client
		return {
			pageProps: {
				// Call page-level getInitialProps
				// PROVIDE STORE TO PAGE
				...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
			}
		};
	});

	render() {
		//Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
		const { Component, pageProps, store } = this.props;

		return <Component {...pageProps} />;
	}
}

export default wrapper.withRedux(MyApp);

/*

Server side redux:

https://redux.js.org/recipes/server-rendering/#redux-on-the-server

*/