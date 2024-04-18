import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {applyMiddleware,compose} from 'redux'
import {createStore} from 'redux'
import  Reducers from './Reducers';
import {thunk} from 'redux-thunk';

const store=createStore(Reducers,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

// https://cloud.mongodb.com/v2/65ff126380d7fa3c1a828064#/metrics/replicaSet/65ff132bedd1ed7f6c3a2da5/explorer/test/users/find
//https://console.cloud.google.com/apis/credentials?project=youtubeclone-418211


);
reportWebVitals();
