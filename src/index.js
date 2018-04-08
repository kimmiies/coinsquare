import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import globalReducer from './reducers/globalReducer';
import { getAccountBalance, isTradeEnabled } from './reducers/actions';

/* Root */
const rootElement = document.getElementById('root')

/* Redux */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const globalStore = createStore(globalReducer, reduxDevTools)


/* Testing the Store */
console.log('-----state', globalStore.getState())
globalStore.dispatch(getAccountBalance())
globalStore.dispatch(isTradeEnabled())

function renderApplication() {
  ReactDOM.render((
    <Provider store={globalStore}>
      <App />
    </Provider>
  ), rootElement)
}

renderApplication()
globalStore.subscribe(renderApplication) // wrapping this is method so that we can subscribe to changes in the store

/* TBD */
registerServiceWorker();
