import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App/App";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer, { initialRootState } from './reducers/rootReducer';

const root = createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers(rootReducer),
    initialRootState,
    composeEnhancers(
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