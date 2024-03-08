import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App/App";
import uiReducer, { initialState } from './reducers/uiReducer'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = createRoot(document.getElementById("root"));
const store = createStore(
    uiReducer,
    Map(initialState),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
);