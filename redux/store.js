import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

import reducer from "./reducers/rootReducer";

const middleWare = [thunk, logger];

const makeStore = context => createStore(
    reducer, applyMiddleware(...middleWare)
);

export const wrapper = createWrapper(
    makeStore, /* returns new store */
    { debug: true }
);

/*
next-redux-wrapper reference:

https://github.com/kirill-konshin/next-redux-wrapper#how-it-works
*/