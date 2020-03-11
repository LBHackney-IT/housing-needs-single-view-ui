import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';
import * as Sentry from '@sentry/browser';
import { hotjar } from 'react-hotjar';

if (
  process.env.REACT_APP_ENV === 'staging' ||
  process.env.REACT_APP_ENV === 'production'
) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    environment: process.env.REACT_APP_ENV
  });
}
if (process.env.REACT_APP_ENV === 'production') {
  hotjar.initialize(process.env.REACT_APP_HOTJAR_ID, 6);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
