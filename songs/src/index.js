import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';
// index.js will setup both the React and Redux parts of the application

// You just pass on the store directly to the Provider component, and don't interact directly with it
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector("#root")
);