import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App/App";
import uiReducer, { initialState } from './reducers/uiReducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById("root"));
const store = createStore(uiReducer, Map(initialState));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
);