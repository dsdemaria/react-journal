import * as firebase from 'firebase';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const config = {
  apiKey: 'AIzaSyDfacI6O6IgivBGPjbDITTGusqpgUP-JqE',
  authDomain: 'react-journal.firebaseapp.com',
  databaseURL: 'https://react-journal.firebaseio.com',
  storageBucket: 'react-journal.appspot.com',
  messagingSenderId: '1036095247641',
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
