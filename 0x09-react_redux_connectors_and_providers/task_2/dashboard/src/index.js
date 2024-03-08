import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App/App";
import uiReducer, { initialState } from './reducers/uiReducer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

const root = createRoot(document.getElementById("root"));
const store = createStore(
    uiReducer,
    Map(initialState),
    applyMiddleware(thunk)
);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
);