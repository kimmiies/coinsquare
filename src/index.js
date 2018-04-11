import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import globalReducer from './reducers/globalReducer';

/* Root */
const rootElement = document.getElementById('root')

/* Redux */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const globalStore = createStore(globalReducer, reduxDevTools)

function renderApplication() {
  ReactDOM.render((
    <Provider store={globalStore}>
      <App />
    </Provider>
  ), rootElement)
}

renderApplication()

registerServiceWorker();
